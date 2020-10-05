import React, { useRef, useState } from 'react';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import { Container, TitleView, TaskName, CameraButton, CameraView } from './styles';
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function Confirm({ route }) {
  const { task_id, taskName } = route.params;
  const camera = useRef(null);
  const [photo, setPhoto] = useState();

  async function takePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        // forceUpOrientation: true,
        // fixOrientation: true,
      };
      const data = await camera.current.takePictureAsync(options);

      setPhoto({
        uri: data.uri,
        type: 'image/*',
        name: `signature_${task_id}_${data.uri}.jpg`,
      });


      console.tron.log(data);

      const formData = new FormData();

      formData.append('signature', {
        // uri: data.uri,
        // // name: `Signature${data.uri}.jpg`,
        // type: 'image/jpg',
        // name: `${data.uri}_${'1'}.jpg`,
        uri: data.uri,
        type: 'image/*',
        name: `signature_${task_id}.jpg`,
      });

      const response = await api.post('signatures', formData);

      const signature_id = response.data.id;

      await api.put(`tasks/confirm/${task_id}`, {
        signature_id,
      });
    }
  }
  // -----------------------------------------------------------------------------
  return (
    <>
      <Container>
        <TitleView>
          <Icon name="clipboard" size={20} style={{ color: '#222'}}/>
          <TaskName>{taskName}</TaskName>
        </TitleView>
        <RNCamera
          ref={camera}
          style={{

            height: 280,
            width: 325,
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 0,
            marginRight: 0,
            // height: 200,
            // width: 350,
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
        />
        <CameraButton onPress={() => takePicture()}><Icon name='camera' size={20} color='#fff'/></CameraButton>
      </Container>
    </>
  );
}
