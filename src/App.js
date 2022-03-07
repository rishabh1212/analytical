import React, { useEffect, useState } from 'react';
import "./App.css";
import nihon_netsugen_logo from "./components/images/nihon_netsugen_logo.jpg";
import { Authenticator, View ,Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, Auth, Hub, Cache, JS } from 'aws-amplify';
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
import { Storage } from 'aws-amplify';

Amplify.configure({
  Auth : awsmobile
})
Amplify.configure({
  Storage: {
    AWSS3: {
      bucket: 'analytical10eadb1c9f9747c1bb196b8034037b70160954-staging',
      region: 'ap-northeast-1',
    },
    // customPrefix: {
    //   private: '<PREFIX>/'
    // },
  },
})
Storage.configure({ level: 'private' })




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
  // alert(Auth.currentSession().getIdToken().getJwtToken())
  Auth.currentSession().then(creds => {
      console.log(creds.getIdToken().getJwtToken());
  }).catch(err => {console.log('unable to get token:', err)})
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
  const [file, setFile] = useState();
  const [downloaded, setDownloaded] = useState(false);

async function download_file () {
  Storage.get(
    's3://amplify-amplify2308ead9bfa04-staging-145036-deployment/amplify-meta.json')
    .then(result => alert(result))
    .catch(err => console.log(err));
  // Insert predictions code here later
  // setDownloaded(true)
  // console.log(storageResult);
  // return storageResult
  alert(1111)
}
// function refreshToken() {
//   // refresh the token here and get the new token info
//   // ......

//   return new Promise(res, rej => {
//       const data = {
//           token, // the token from the provider
//           expires_at, // the timestamp for the expiration
//           identity_id, // optional, the identityId for the credentials
//       }
//       res(data);
//   });
// }
return (
  <Authenticator components={components}>
    {({ signOut, user }) => (
      <div style={styles.container}>
          {/* <iframe
        width="960"
        height="720"
        src="https://ap-northeast-1.quicksight.aws.amazon.com/embed/6672ded38098488bae23bd7fa9537dd8/dashboards/7f675f16-f54f-40b4-a7d1-6f7ef15d38f1?code=AYABeDJQe1Ofcp51K1WQyfjRYtIAAAABAAdhd3Mta21zAFBhcm46YXdzOmttczphcC1ub3J0aGVhc3QtMTozNjcwOTQ1NjE4OTQ6a2V5LzkyZDU3MjEzLTc0MjItNGNhOC1iYWZiLTg2MDFjNGZkODgyNwC4AQIBAHh19lpIdHJLvWmpW7433A8711o_o_2vfnBuxyXbJJdfkwEfN3lSGErGhicMlYwQApU9AAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMW_nk8xNejg2E2k_9AgEQgDvkoQ78W9UGgSttk5h8OsDv7gOoVX3S5_tmz-AkMNeNoFDzVQKG9DsNuDxhe7wGPMRj4uVZnrtWXrFGeAIAAAAADAAAEAAAAAAAAAAAAAAAAADlE4GXk8FjzzPPAfh8941e_____wAAAAEAAAAAAAAAAAAAAAEAAACbyaaXEUVxLnOKTd2ZYd0VVDILeWqxVkpTQXtEVYJDF6N8BrM2Jgfio9V4SVa9LHyw-UlSZokfY6TxqTstAb7s1IBbAw07nsv0d0PTEX7aSBDW-aWnI9YB4Zes4HxfJEKE3uccPv018FJZwfiizMksofP4_LdsB5N9xY4JNfV9b5S3EN0kLSeH_An043xrLlkMh9MR9lNEH3k_95Inb2kkc_0uvIwdf_NgwFGK&identityprovider=quicksight&isauthcode=true">
    </iframe> */}
    {/* <S3Image imgKey="example.png" /> */}
        <button style={styles.button} onClick={async () => {
          const session = await Auth.currentSession();
          const token = session.getIdToken().getJwtToken();
          const creds = await Auth.currentCredentials()
          // alert(JSON.stringify(creds))
          // const client = new S3Client({
          //   region: "ap-northeast-1",
          //   credentials: creds
          // });
          // const command = new ListBucketsCommand(
          //   {'Bucket': 'nihon-netsugen'}
          // )
          // const result = await client.send(command)
          // alert(result)
          const url = 'https://nihon-netsugen.s3.ap-northeast-1.amazonaws.com/processed/LT-SH(%E6%B5%AE)_lte_2.json'
          const request = fetch(url, {
            method: 'get', 
            headers: {
                'Authorization': 'Bearer ' + token
            }
          }).then(x=>alert(Object.keys(x)));
          // Auth.Credentials = new fromCognitoIdentityPool({
          //   accountId: '337039655624',
          //   identityPoolId: awsmobile.aws_cognito_identity_pool_id,
          //   logins: {
          //     'cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_pdFKu5hdm': token
          //   },
          //   clientConfig: { region: awsmobile.aws_project_region}
          // })
          // Auth.configure({
          //   refreshHandlers: {
          //       'developer': refreshToken // the property could be 'google', 'facebook', 'amazon', 'developer', OpenId domain
          //   }
          // })
          // Auth.Credentials.get(
          //   function(){

          //   }
          // )
          // credentials.then(x=>alert(x))
          // credentials.get(
          //   alert(credentials.GetIdentityIdAsync())
          // )
          // const client = new S3Client({
          //   region: "ap-northeast-1",
          //   credentials: fromCognitoIdentityPool({
          //     accountId: '337039655624',
          //     identityPoolId: awsmobile.aws_cognito_identity_pool_id,
          //     logins: {
          //       'cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_pdFKu5hdm': Cache.config.storage.getItem('CognitoIdentityServiceProvider.229arvc87jfnqkkhqp2kik1jd1.nn-netsugen.idToken')
          //     },
          //     clientConfig: { region: awsmobile.aws_project_region}
          //   })
          // });
        // const result = await client.send(new ListBucketsCommand({'bucket': 'nihon-netsugen'}))
  // const result = await Storage.list('')
  // alert(result)
        }}>xxxx</button>   
      </div>
    )}
  </Authenticator>
)};
