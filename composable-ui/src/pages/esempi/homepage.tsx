/*Qui si puo' mettere tutto il codice che si vuole!!!!

*/

import { Heading } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <div>
      {/*
      <video id="background-video" loop autoPlay>
        <source
          src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
          type="video/mp4"
        />
        <source
          src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
          type="video/ogg"
        />
        Your browser does not support the video tag.
      </video>

      <p>Dove si andra' a mettere homePage</p>
      <AspectRatio maxW="560px" ratio={1}>
        <Box>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
          Dove compare?
        </Box>
      </AspectRatio>

      <div>
        <p>Questo è il mio iframe personalizzato:</p>
        <iframe
          title="Il mio iframe"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          width="500"
          height="300"
        ></iframe>
      </div>

      <Box>
        Questo e' dentro ad un box
        <video autoPlay loop muted>
          <source
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Heading</h1>
          <p>Lorem ipsum...</p>
        </div>
        <Heading as="h2" size="md">
          (xl) In love with React & Next
        </Heading>
      </Box>

      <Box position="relative">
        <video autoPlay loop muted>
          <source
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Heading
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          fontSize="3xl"
        >
          Welcome to My Website
        </Heading>
      </Box>
      
      */}
      {/* componente classico di react per i video */}

      <video width="320" height="240" controls preload="none">
        <source
          src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
          type="video/mp4"
        />
        <Heading as="h2" size="md" color="red">
          (xl) In love with React & Next
        </Heading>
        rt the video tag.
      </video>
    </div>
  )
}
