To resolve this, you need to adjust your Firebase security rules to allow the write operation.  Additionally, robust error handling should be implemented to catch and report exceptions. 

```javascript
// Correct code with proper error handling and security rules
firebase.database().ref('users/userId/profile').set({
  name: 'John Doe',
  email: 'john.doe@example.com'
}).then(() => {
  console.log('Data written successfully!');
}).catch(error => {
  console.error('Error writing data:', error);
  // Add additional error handling logic here, such as user feedback or retry mechanism
});
```

**Security Rules (firebase.rules.json):**

```json
{
  "rules": {
    "users": {
      "$userId": {
        "profile": {
          ".write": "true" // Allow write access
        }
      }
    }
  }
}
```

Remember to replace `"true"` with more restrictive rules based on your security requirements. Always deploy the updated security rules to your Firebase project.