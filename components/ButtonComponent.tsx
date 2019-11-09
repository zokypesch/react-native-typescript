import React, { StatelessComponent } from "react";
import { StyleSheet } from 'react-native';
import {
  Button,
  Layout,
} from 'react-native-ui-kitten';

export interface ButtonProps {
    color: string;
    onClick: (obj: any) => void;
    text?: string;
}

export const ButtonComponent: StatelessComponent<ButtonProps> = ({
    color,
    onClick,
    text
  }) => {
  
    return (
        <Layout style={styles.container}>
            <Button style={styles.button} status="primary" onPress={onClick}>{text}</Button>
        </Layout>
    );
};
// status={color}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingVertical: 4,
      paddingHorizontal: 4,
    },
    button: {
      marginVertical: 4,
      marginHorizontal: 4,
    },
});
