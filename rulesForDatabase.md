# Rules for the Firebase Database for the Slack Cannon Project

Gives the user access to read 
```js
{
  "rules": {
    "metadata": {
      "$user_id": {
        // Read access only granted to the authenticated user.
        ".read": "$user_id === auth.uid",
        // Write access only via Admin SDK.
        ".write": "$user_id === auth.uid"
      }
    }
  }
}
```

```js
// If your structure in your database looks like this...
  {
    "messages": {
      "message0": {
        "content": "Hello",
        "timestamp": 1405704370369
      },
      "message1": {
        "content": "Goodbye",
        "timestamp": 1405704395231
      },
      ...
    }
  }
```

```js
// Your rules should look like this!
  {
    "rules": {
      "messages": {
        "$message": {
          // only messages from the last ten minutes can be read
          ".read": "data.child('timestamp').val() > (now - 600000)",

          // new messages must have a string content and a number timestamp
          ".validate": "newData.hasChildren(['content', 'timestamp']) && newData.child('content').isString() && newData.child('timestamp').isNumber()"
        }
      }
    }
  }



{
    "rules": {
        ".read": "auth != null && auth.token.isAdmin == true"
        ".write": "auth != null && auth.token.isAdmin == true"
        "announcements": {
            // users can only read the material from the database, but not write to it. By default, unspecified rules are denied.
            ".read": "auth != null"
        }
        "global": {
            // once the key has been pushed then users are allowed to read and write the information in this area
            ".read": "auth != null",
            ".write": "!data.exists() && auth != null"
            ".validate": "newData.hasChildren(['message', 'timestamp', 'userObj']) && newData.child('message').isString() && newData.child('timestamp').isNumber()"
        }
        "users": {
            "$userId": {
                ".read": "auth != null && $userId === auth.uid"
                ".write": "auth != null && $userId === auth.uid"
            }
        }
    }
}



```