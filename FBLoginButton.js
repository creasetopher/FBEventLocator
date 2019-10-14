import React, { Component } from 'react';
import { View } from 'react-native';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
    } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          permissions = {["email", "user_location", "user_birthday"]}
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
                                            string: 'email, name, location, birthday'
                                          }
                                        },
                                        accessToken: data.accessToken.toString()

                                      },

                                      (error, data) => {
                                        console.log("the data is: ");
                                        console.log(data);
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
