import React, { Component } from 'react';
import { View } from 'react-native';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
    } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  state = {
    user_likes: null
  };


  likeCleanup = (user_like_obj) => {
    console.log("like cleanup:");

    console.log(user_like_obj);
    console.log(user_like_obj.0);
    // console.log(user_like_obj."0".id);
    console.log('keys below');
    console.log(Object.keys(user_like_obj));

    let like_map = {};
    let i = 0
    // for (var entry in user_like_obj) {
    //   console.log(i);
    //   console.log(entry.id);
    //   i++;
    // }
  }


  render() {
    return (
      <View>
        <LoginButton
          permissions = {["email", "user_location", "user_birthday", "user_likes"]}
          onLoginFinished = {
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              }

              else if (result.isCancelled) {
                alert("Login was cancelled");
              }

              else {
                alert("Login was successful with permissions: " + result.grantedPermissions);
                AccessToken.getCurrentAccessToken().then(
                  (data) => {

                    console.log("accessToken = " + data.accessToken.toString())
                    console.log("token permissions = " + data.permissions);
                    const req = new GraphRequest(
                                      '/me',
                                      {
                                        parameters: {
                                          fields: {
                                            string: 'email, name, location, birthday, likes'
                                          }
                                        },
                                        accessToken: data.accessToken.toString()

                                      },

                                      (error, data) => {
                                        // console.log("the data is: ");
                                        // console.log(data);
                                        // console.log(data.likes.data);
                                        this.likeCleanup(data.likes.data);
                                      }
                    );
                    new GraphRequestManager().addRequest(req).start();
                  }
                );
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
};

module.exports = FBLoginButton;
