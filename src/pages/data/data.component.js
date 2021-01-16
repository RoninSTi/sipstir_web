import React from 'react';

import Card from 'react-bulma-components/lib/components/card';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Hero from 'react-bulma-components/lib/components/hero';
import Section from 'react-bulma-components/lib/components/section';

const Home = () => {
  return (
    <div>
      <Section>
        <Hero color="danger" >
          <Hero.Body>
            <Container>
              <Heading>
                Data Deletion
              </Heading>
              <Heading subtitle size={3}>
                Request your data to be permanently removed from our servers
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
      <Section>
        <Container>
          <Card>
            <Card.Header>
              <Card.Header.Title>
                Instructions to remove your data
              </Card.Header.Title>
            </Card.Header>
            <Card.Content >
              <p>Send an email to <a href="mailto:info@sipstir.app">info@sipstir.app</a> with a subject: "DATA DELETION" <strong>FROM THE EMAIL ADDRESS OF THE ACCOUNT DATA REGISTERED WITH SIPSTIR.</strong></p>
              <br />
              <p>Your data will be deleted and you will be provided with confirmation.</p>
            </Card.Content>
          </Card>
        </Container>
      </Section>
    </div>
  );
};

export default Home;
