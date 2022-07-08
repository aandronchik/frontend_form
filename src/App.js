import * as React from 'react';
import styles from './shared/header.less';
import { Layout } from './shared/Layout/Layout';
import { LayoutContent } from './shared/Layout/Layout';
import { PersonId } from './shared/Content/PersonId';
import { ChangeStatus } from './shared/Content/Status';
import { StatusToolTip } from './shared/Content/Status';
import { Header } from './shared/Content/Header';
import { InputField, InputTitle, CityChoise, Line} from './shared/Content/InputForm';

import './global.less';

export function AppComponent() {
    return (
        // <p>ok</p>
    	<Layout>
            <LayoutContent>
                <Header></Header>
                <StatusToolTip value="Прежде чем действовать, надо понять"></StatusToolTip>
                <CityChoise/>
                <Line/>
            </LayoutContent>    
        </Layout>
    );
}