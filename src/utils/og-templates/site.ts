import { SITE } from "@config";
import satori from "satori";
import type { FontConfig } from "../loadGoogleFont";
import { loadGoogleFont } from "../loadGoogleFont";

const fontsConfig: FontConfig[] = [
  {
    name: "Plus Jakarta Sans",
    font: "Plus+Jakarta+Sans",
    weight: 400,
  },
  {
    name: "Plus Jakarta Sans",
    font: "Plus+Jakarta+Sans:wght@700",
    weight: 700,
  },
];

export default async () => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at 10% 20%, rgb(239, 246, 249) 0%, rgb(206, 239, 253) 90%)",
          fontSize: "88px",
          textAlign: "center",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                fontWeight: "bold",
                marginBottom: "32px",
              },
              children: [
                {
                  type: "span",
                  props: {
                    style: {
                      color: "black",
                    },
                    children: "page",
                  },
                },
                {
                  type: "span",
                  props: {
                    style: {
                      color: "#5570F1",
                    },
                    children: "gen",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                color: "black",
                fontSize: "20px",
                width: "65%",
                lineHeight: "1.5",
              },
              children: SITE.description,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFont(
        SITE.title + SITE.description + SITE.canonicalURL,
        fontsConfig
      ),
    }
  );
};
