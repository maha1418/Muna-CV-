import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  DataTable,
  TableHeader,
  Textfield,
  Button
} from "react-mdl";


class Resume extends Component {
  render() {
    return(
      
      <div style={{ height: "300px", position: "relative" }}>
        <Layout>
         
          <Content>
            <Textfield
              onChange={() => {}}
              label="الاسم..."
              style={{ width: "200px" }}
            />
            
          </Content>
          <Content>
            <Textfield
              onChange={() => {}}
              label="الجامعة..."
              style={{ width: "200px" }}
            />
            <Textfield
              onChange={() => {}}
              label="التخصص..."
              style={{ width: "200px" }}
            />
          </Content>
          <Content>
            <Button raised ripple>
              رفــع السيـــرة
            </Button>
            <Button primary>تـــســليــم</Button>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default Resume;