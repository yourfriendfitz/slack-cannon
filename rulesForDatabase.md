# Rules for the Firebase Database for the Slack Cannon Project

```js
{
    "rules": {
        // gives read and write access for the entire site to the administrators
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