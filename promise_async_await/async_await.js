const getGitUsername = async () => {
  const message = "GitのユーザIDは";
  const url = "https://api.github.com/users/domi10momo";

  const json = await fetch(url)
    .then(res => {
      console.log("これは非同期処理成功時のメッセージ")
      return res.json()
    }).catch(error => {
      console.error("これは非同期処理失敗時のメッセージ", error)
      return null
    });
  console.log(message + json.login)
}

getGitUsername()