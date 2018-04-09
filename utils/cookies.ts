import * as Keygrip from "keygrip";
import * as jwt from "jsonwebtoken";

export const cookieKeygrip = new Keygrip(["cookie-secret"]);

export const getCookies = ({ user }: { user: number }) => {
  const session = new Buffer(JSON.stringify({ passport: { user } })).toString(
    "base64"
  );

  const sessionSig = cookieKeygrip.sign(`session=${session}`);

  return {
    session,
    "session.sig": sessionSig
  };
};

export const signCookie = (cookie: string) => {
  return jwt.sign({ cookie }, process.env.SECRET, {
    expiresIn: "25y"
  });
};
