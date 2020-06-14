import React, { useRef, useState } from 'react';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import { Container, CameraButton, Div4 } from './styles';
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function Confirm({ route }) {
  const { task_id } = route.params;
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
      // const data = await camera.current.takePictureAsync(options);
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
//       const test = formData._parts[0]
//       const twotest = test[1]
//       const threetest = twotest
// // %%%%%%%%%%%%%%%%%%%%%%%%%%
// console.tron.log(threetest);

      const response = await api.post('signatures', formData);

      const signature_id = response.data.id;

      await api.put(`tasks/${task_id}/t_end`, {
        signature_id,
      });
      console.tron.log(test);
    }
  }
  // -----------------------------------------------------------------------------
  return (
    <>
      {/* <Header /> */}
      <Container>
        <Div4>
          <RNCamera
            ref={camera}
            style={{

              height: 600,
              width: 400,
              marginTop: 50,
              marginBottom: 20,
              marginLeft: 0,
              marginRight: 0,


              // height: 200,
              // width: 350,
            }}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false}
          />
          <CameraButton onPress={() => takePicture()}><Icon name='check' size={20} color='#fff'/></CameraButton>
        </Div4>
      </Container>
    </>
  );
}
