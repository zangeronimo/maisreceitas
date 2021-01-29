import api from "@/services/api";

export default async function getToken() {
  const headers = {
    headers: {
      authorization: 'Basic YW5ndWxhcjpAbmd1bEByMA==',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  };

  const data = 'username=maisreceitas%40tudolinux.com.br&password=senha&grant_type=password';

  const resultToken = await api.post("/oauth/token", data, headers);
  const { access_token } = resultToken.data;

  api.defaults.headers.authorization = `Bearer ${access_token}`;

  return access_token;
}
