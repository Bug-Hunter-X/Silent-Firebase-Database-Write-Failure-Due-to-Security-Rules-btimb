The following code snippet demonstrates a common issue when working with Firebase's Realtime Database and security rules.  This example tries to write data to a specific location, but it fails silently without clear error messages. This is because the default Firebase rules are restrictive and usually block such write operations unless explicitly allowed.

```javascript
// Incorrect code
firebase.database().ref('users/userId/profile').set({
  name: 'John Doe',
  email: 'john.doe@example.com'
}).catch(error => {
  console.error('Error writing data:', error);
});
```