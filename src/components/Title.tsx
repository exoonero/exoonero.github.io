"use client"
import {useState, useEffect} from "react"

interface TitleProps {
  municipio: string;
}

export default function Title({municipio}: TitleProps) {
    const [titleText, setTitleText] = useState("");
    const buildTitle = (municipio: string) => {
      fetch(`https://exoonero.org/data/inicial/${municipio}-inicial.json`, {})
        .then((response) => 
          response.json()
        )
        .then((data) => {
          const title = data.nome as string;
          setTitleText(
            title.replace(/\w\S*/g, function (txt) {
              return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
            })
          );
        });
    };
    useEffect(() => {
      buildTitle(municipio as string);
    }, []);
    return (
      <h1 className=" text-2xl 2xl:text-3xl 3xl:text-[2.4375rem]  font-semibold lg:w-[42.93rem] leading-10">
          Acompanhe as nomeações e exonerações que aconteceram em
          <span className="text-[#4AA381]">{(" " + titleText) as string}</span>
        </h1>
    )
    }