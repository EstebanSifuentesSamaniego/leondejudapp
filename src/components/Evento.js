import React from 'react'
import SecondHeader from './SecondHeader'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Evento() {
  return (
    <div >
        <SecondHeader />
    
        <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto', marginTop: '20px', marginBottom: '20px' }}>
            <CardMedia
                component="img"
                height="140"
                image="images/winter.jpg"
                alt="hna-elvia"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Cáncer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                El esposo de la hermana Elvia Edith está grave, 
                el cancer está invadiendo rápidamente.
                Ora en este momento por la hermana, su esposo y su familia.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Leer más</Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto', marginTop: '20px', marginBottom: '20px' }}>
            <CardMedia
                component="img"
                height="140"
                image="images/mental-health.jpg"
                alt="winter"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Salud mental y emocional
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Muchas personas en la iglesia luchan contra la depresión, ansiedad, 
                y pensamientos suicidas. ¿Qué puedes hacer? Además de orar,
                puedes invertir tiempo en ellos. Tal vez necesiten llorar contigo, 
                un abrazo, o solo hablar. Serás de bendición
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Leer más</Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto', marginTop: '20px', marginBottom: '20px' }}>
            <CardMedia
                component="img"
                height="140"
                image="images/drone-photo2.jpg"
                alt="winter"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Comunidad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Tú, yo, y todos en la iglesia somos un cuerpo en Cristo. Ora que Dios
                nos ayude a entender, desde el pastor hasta cada miembro, que todo lo que
                hacemos nos afecta unos a otros. Que nos podamos amar, edificar, y aún soportar
                unos a otros.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Leer más</Button>
            </CardActions>
        </Card>


    </div>
  )
}
