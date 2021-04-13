import md5 from "blueimp-md5";

export function gravatar(email) {
  const emailHash = md5(email.toLowerCase());
  return `https://www.gravatar.com/avatar/${emailHash}?d=mm`;
}
