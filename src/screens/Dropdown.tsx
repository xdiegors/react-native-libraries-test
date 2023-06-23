import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export function Dropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="TypeScript" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="C#" value="c#" />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="Go" value="go" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="PHP" value="php" />
        <Picker.Item label="Ruby" value="ruby" />
      </Picker>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="React" value="react" />
        <Picker.Item label="Node" value="node" />
        <Picker.Item label=".NET" value="net" />
        <Picker.Item label="Spring" value="spring" />
        <Picker.Item label="Go" value="go" />
        <Picker.Item label="Django" value="django" />
        <Picker.Item label="Laravel" value="laravel" />
        <Picker.Item label="Rails" value="rails" />
      </Picker>
    </>
  );
}
