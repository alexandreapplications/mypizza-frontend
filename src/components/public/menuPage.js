import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  GridList: {
    width: "100%",
    height: "100vh"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const tileData = [
  {
    id: 1,
    name: "Muçarela",
    price: 20.2,
    components: ["Quejo muçarela"],
    img: "muçarela.jpg"
  },
  {
    id: 2,
    name: "Marguerita",
    price: 20.2,
    components: ["Quejo muçarela", "Tomate"],
    img: "marguerita.jpg"
  },
  {
    id: 3,
    name: "Peperoni",
    price: 23.2,
    components: ["Quejo muçarela", "Peperoni"],
    img: "peperoni.jpg"
  },
  {
    id: 4,
    name: "Calabresa",
    price: 23.2,
    components: ["Quejo muçarela", "Calabresa", "Oregano"],
    img: "calabresa.jpg"
  },
  {
    id: 5,
    name: "Baiana",
    price: 23.2,
    components: ["Quejo muçarela", "Calabresa", "Oregano"],
    img: "baiana.jpg"
  }
];

function MenuPage() {
  const classes = useStyles();

  return (
    <GridList
      cellHeight={180}
      cols={4}
      spacing={10}
      className={classes.gridList}
    >
      {tileData.map(tile => (
        <GridListTile key={tile.id}>
          {/* <img
            src={require(`~/public/images/pizzas/${tile.img}`)}
            alt={tile.title}
          /> */}
          <div>{tile.components.join(", ")}</div>
          <GridListTileBar
            title={tile.name}
            subtitle={<span>Preço: {tile.price}</span>}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default MenuPage;
