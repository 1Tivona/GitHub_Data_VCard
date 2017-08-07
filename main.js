let userInfo ={
"login": "1Tivona",
"id": 28545843,
"avatar_url": "https://avatars3.githubusercontent.com/u/28545843?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/1Tivona",
"html_url": "https://github.com/1Tivona",
"followers_url": "https://api.github.com/users/1Tivona/followers",
"following_url": "https://api.github.com/users/1Tivona/following{/other_user}",
"gists_url": "https://api.github.com/users/1Tivona/gists{/gist_id}",
"starred_url": "https://api.github.com/users/1Tivona/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/1Tivona/subscriptions",
"organizations_url": "https://api.github.com/users/1Tivona/orgs",
"repos_url": "https://api.github.com/users/1Tivona/repos",
"events_url": "https://api.github.com/users/1Tivona/events{/privacy}",
"received_events_url": "https://api.github.com/users/1Tivona/received_events",
"type": "User",
"site_admin": false,
"name": "Tivona Spruill",
"company": null,
"blog": "",
"location": "Durham, NC",
"email": null,
"hireable": null,
"bio": "Making a career change and new to coding.  Learning at the The Iron Yard. ",
"public_repos": 14,
"public_gists": 0,
"followers": 1,
"following": 1,
"created_at": "2017-05-08T21:05:35Z",
"updated_at": "2017-08-07T17:35:16Z"
}

// let element = document.getElementsByTagName('p');
// console.log(element, userInfo.name)

document.body.innerHTML = `Name: ${userInfo.name}
GitHub url: ${userInfo.html_url}  Email: tivona.spruill@yahoo.com
Company: Cool Company Name   Website: coolsite.com
${userInfo.bio}  ${userInfo.avatar_url}
`;
