import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react';
import { Link } from "react-router-dom";
import { PokeType } from './PokeType';

function PokemonCard(props) {
  const {pokemon} = props
  return (
    <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: "0!important",
                  }}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <Card
                    component={Link}
                    to={`pokemons/${pokemon.id}`}
                    sx={{
                      width: "12rem",
                      height: "19rem",
                      textDecoration: "none",
                    }}
                    elevation={0}
                  >
                    <div
                      style={{
                        backgroundColor: "#F2F2F2",
                        borderRadius: 5,
                        padding: 30,
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={`${pokemon.url}`}
                        alt="Missing image"
                        sx={{
                          margin: "auto",
                          objectFit: "contain",
                          width: "100%",
                          borderRadius: 5,
                        }}
                      />
                    </div>
                    <CardContent sx={{ paddingBottom: 0 }}>
                      <Typography variant="small" color="gray">
                        #{`00${pokemon.id}`.slice(-3)}
                      </Typography>
                      <Typography variant="h5">
                        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing sx={{ padding: "1rem" }}>
                      <Stack direction="row" spacing={1}>
                        {pokemon.types.map((type) => (
                          <PokeType type={type} key={type} />
                        ))}
                      </Stack>
                    </CardActions>
      </Card>
      
                </Grid>
  )             
              
}

export default PokemonCard