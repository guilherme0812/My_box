import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import config from '../../../config/config'

import styles from './styles';
import MenuAreaRestrita from '../../components/MenuAreaRestrita';

const Profile = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [displayQR, setDisplayQR] = useState('flex');
    const [displayForm, setDisplayForm] = useState('none');
    const [code, setCode] = useState(null);
    const [product, setProduct] = useState(null);
    const [localization, setLocalization] = useState(null);

    const searchProduct = async (code) => {
        let response = await fetch(`${config.urlRoot}searchProduct`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: code
            })
        })
    }

    // Recbe autorização para o uso da câmera
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // Leitura do código QR
    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        setDisplayQR('none')
        setCode(data)
        setDisplayForm('flex')
        searchProduct(data)
    };

    const sendForm = async () => {

    }

    return (
        <View style={[styles.fullHeight, styles.backgroundWhite]}>
            <MenuAreaRestrita title="Editar" navigation={navigation} />

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : (value) => handleBarCodeScanned(value)}
                style={styles.qr__code(displayQR)}
            />

            <View style={styles.container}>
                <View style={[styles.width, styles.form(displayForm)]}>
                    <Text>Código do produto: {code}</Text>
                    <TextInput
                        placeholder='Nome do produto'
                        style={styles.inputGray}
                        value={product}
                    />
                    <TextInput
                        placeholder='Código do produto'
                        style={styles.inputGray}
                        value={localization}
                    />
                    <Button
                        title="Enviar"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        </View>
    )
};
export default Profile;