import React from 'react';

import { Heading, ChangeableText } from 'components';
import { Grid } from 'restyled';

const Footer = () => (
  <div className="yo-footer">
    <Grid>
      <Grid.Row colEqualHeight>
        <Grid.Col xs={12} sm={6}>
          <Heading size={2} typeface="bold">
            Let’s colaborate together on your <ChangeableText variants={['significant', 'markable', 'essential']} highlight /> project!
          </Heading>
        </Grid.Col>

        <Grid.Col xs={12} sm={6} contentAlign="middle">
          <Heading size={4} typeface="bold">
            Contact us:
          </Heading>
          <Heading size={4}>
            <a
              href="mailto:hello@yo-development.com"
              className="colored-black circular-book font-size-small"
            >
              hello@yo-development.com
            </a>
          </Heading>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
);

export default Footer;