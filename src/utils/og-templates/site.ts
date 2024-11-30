import { SITE } from "@config";
import satori from "satori";
import loadGoogleFonts, { type FontOptions } from "../loadGoogleFont";

export default async () => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#fefbfb",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        children: "Hello, Satori!",
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: (await loadGoogleFonts(
        SITE.title + SITE.description + SITE.name
      )) as FontOptions[],
    }
  );
};
