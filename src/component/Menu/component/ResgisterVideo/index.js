import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

function useForm({ initialValues }) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm: () => {
      setValues({});
    },
  };
}

const PROJECT_URL = "https://cmkgoeimilbxntcwlwki.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNta2dvZWltaWxieG50Y3dsd2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNTU3NjcsImV4cCI6MTk4MzczMTc2N30.xCxiLAVT8y67acq1fjnWeL9HM83cnRS7gTt3S0_sbPY";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);


export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = React.useState(false);
  const formCadastro = useForm({
    initialValues: {
      title: "Front-end...",
      url: "https://www.youtube.com/watch?v=0oJQUs5oRiM",
    },
  });

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel && (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            supabase.from("playlists").insert({
                title: formCadastro.values.title,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: "jogos",
             })
             .then((oqueveio) => {
                console.log(oqueveio);
             })
             .catch((err) => {
                console.log(err);
             })

            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              x
            </button>
            <input
              placeholder="Título do video"
              name="title"
              value={formCadastro.values.title}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
