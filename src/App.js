// import React, { useEffect, useState } from 'react';
import "./App.css";
import nihon_netsugen_logo from "./components/images/nihon_netsugen_logo.jpg";
import { Authenticator, View ,Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, Auth, Hub, Cache } from 'aws-amplify';
import awsmobile from "./aws-exports.js";
// import * as QuickSightEmbedding from 'amazon-quicksight-embedding-sdk';
import {fromCognitoIdentityPool} from "@aws-sdk/credential-providers"
// import { CognitoIdentityClient, GetIdCommand, GetIdInput } from "@aws-sdk/client-cognito-identity"; // ES Modules import
// import {fromCognitoIdentityPool, getIdCommand} from '@aws-sdk/credential-provider-cognito-identity'
// import { QuickSightClient, GetDashboardEmbedUrlCommand, ListDashboardsCommand } from "@aws-sdk/client-quicksight";
// // import {S3Image} from "@aws-amplify/ui-react";
// import * as AWS from '@aws-sdk/client-cognito-identity'
// import * as AWS from "@aws-sdk/client-quicksight";
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

Amplify.configure({
  Auth : awsmobile
})




// const currentConfig = Auth.configure();

const styles = {
  ViewLogo:{paddingTop:"50%", width:"100%"},
  container: { width: '100%', heigh:'100vh',
  margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 0 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: '#008B8B', color: 'white', outline: 'none', fontSize: 18,marginBottom:"0", padding: '12px 0px' }
}

const components = {
  Header() {
    return (
     <View style={styles.ViewLogo}>
      
        <Image
          alt="Netsugen LOGO "
          src={nihon_netsugen_logo}
        />
     </View>
    );
  }
}

// // function getAccessToken() {
// //   return Auth.currentSession()
// //     .then(session => session.getAccessToken())
// //     .catch(() => console.log('Not signed in'));
// // }
// const creds = new fromCognitoIdentityPool({
//   IdentityPoolId: awsmobile.aws_cognito_identity_pool_id,
//   clientConfig: { region: awsmobile.aws_project_region} // Configure the underlying CognitoIdentityClient.
// });
function getcred(){
  // const client = new AWS.QuickSight({
  alert(Cache.config.storage.getItem('CognitoIdentityServiceProvider.229arvc87jfnqkkhqp2kik1jd1.nn-netsugen.idToken'))
  const client = new S3Client({
    region: "ap-northeast-1",
    credentials: fromCognitoIdentityPool({
      accountId: '337039655624',
      identityPoolId: awsmobile.aws_cognito_identity_pool_id,
      logins: {
        'cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_pdFKu5hdm': Cache.config.storage.getItem('CognitoIdentityServiceProvider.229arvc87jfnqkkhqp2kik1jd1.nn-netsugen.idToken')
      },
      clientConfig: { region: awsmobile.aws_project_region}
    })
  });
  window.alert(Object.keys(client.config), 1)
  const command = new ListBucketsCommand({'Bucket': 'amplify-amplify2308ead9bfa04-staging-145036-deployment'})

  // const command = new GetDashboardEmbedUrlCommand({
  //   'AwsAccountId': '337039655624',
  //   'DashboardId': '7f675f16-f54f-40b4-a7d1-6f7ef15d38f1',
  // });
  // const command = new ListDashboardsCommand({
  //   'AwsAccountId': '337039655624',
  //   'DashboardId': '7f675f16-f54f-40b4-a7d1-6f7ef15d38f1',
  // });
  client
  .send(command)
  .then((data) => {
    window.alert(1)
    console.log(data)
  })
  .catch((error) => {
    window.alert(11)
    console.error(error);
  });
  return 'Signout'
}

export default function App(){
return (
  <Authenticator components={components}>
    {({ signOut, user }) => (
      <div style={styles.container}>
          {/* <iframe
        width="960"
        height="720"
        src="https://ap-northeast-1.quicksight.aws.amazon.com/sn/embed/share/accounts/337039655624/dashboards/7f675f16-f54f-40b4-a7d1-6f7ef15d38f1">
    </iframe> */}
    {/* <S3Image imgKey="example.png" /> */}
        <button style={styles.button} onClick={signOut}>xxxx{getcred()}</button>   
      </div>
    )}
  </Authenticator>
)};
