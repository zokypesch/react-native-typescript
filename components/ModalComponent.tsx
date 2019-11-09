import React from 'react';
import {ButtonComponent} from './ButtonComponent';
import { Text } from 'react-native';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps, TypeAllProps} from '../store/AllProps'
import { Message } from '../store/message/types'

import {
    Layout,
  } from 'react-native-ui-kitten';

interface State {
    click: number;
}

interface propsModal {
    name: string;
    buttonName: string;
}

type TypeProps = TypeAllProps & propsModal;

// class ModalComponenet extends React.Component<propsModal, State> {
class ModalComponenet extends React.Component<TypeProps, State> {
    // constructor(props: propsMopdal) {
    constructor(props: TypeProps) {
        super(props)
    }
    state = {
        click: 0
    };
    render() {
        return(
            <Layout>
                <Text>{this.props.name}</Text>
                <Text>{this.state.click}</Text>
                <Text>{this.props.chat.status}</Text>
                <Text>{this.props.chat.messages.map((data)=>data.message)}</Text>
                <ButtonComponent color="primary" 
                    onClick={() => this.setState((current) => ({ ...current, click: current.click + 1 }))} 
                text={this.props.buttonName} />
                <ButtonComponent color="secondary" onClick={() => {
                    let msg : Message = {
                        user: "maulana",
                        message: "test123",
                        timestamp: 50
                    }
                    this.props.onSendMessage(msg)
                }} text="try me"/>
            </Layout>
        )
    }
}


// export default ModalComponenet;
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalComponenet);