import styled from "styled-components";

export const DetailsConteiner = styled.div`
  display: grid;
  grid-template:  1fr 3fr 3fr / 3fr 3fr 3fr;
  background-color: #f7f7f7;
`

export const PokeName = styled.h1`
  grid-area: 1/1/2/4;
  text-align: center;
  font-size: 45px;
`

export const PokeSprites = styled.section`
  grid-area: 2/1/4/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
`

export const PokeStats = styled.section`
  grid-area: 2/2/4/3; 
  text-align: center;
  margin-top: 50px;
  margin: 40px;
  padding-top: 150px;
  background-image: url("https://wallpaperaccess.com/full/5818315.png");
  background-size: 550px 650px;
`

export const PokeType = styled.section`
  grid-area: 2/3/3/4;
  text-align: center;
  margin-top: 50px;
  margin: 40px;
  padding-top: 40px;
  background-image: url("https://www.pngitem.com/pimgs/m/600-6002639_pokemon-dialog-box-pokemon-text-box-png-transparent.png");
  background-size: 550px 275px;
`

export const PokeAtak = styled.section`
  text-align: center;
  margin: 40px;
  padding-top: 10px;
  background-image: url("https://www.pngitem.com/pimgs/m/600-6002639_pokemon-dialog-box-pokemon-text-box-png-transparent.png");
  background-size: 550px 270px;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 40px;
  border: solid black 2px;
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d843fov-5ad2d436-789b-48f4-91ac-7a553ca26306.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg0M2Zvdi01YWQyZDQzNi03ODliLTQ4ZjQtOTFhYy03YTU1M2NhMjYzMDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4WU23QrSu_7CD6c4MJIYPEeIvE5o8maEEkqYM40mwus");
  background-size: 350px;
`

export const H1Mover = styled.h1`
  margin-top: 45px;
  margin-bottom: -10px;
`