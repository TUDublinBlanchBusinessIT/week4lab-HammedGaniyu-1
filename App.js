import { SafeAreaView, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const gradePoints = {
    'F': 0, 'D': 1.5,'C': 2,'C+': 2.75,'B': 3,'B+': 3.5,'A': 4
  };

  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');

  function clickMe() {
    alert("this is the click me button");

    const credits = 5;
    const totalPossibleCredits = 10;
    const totalGradeScores = (gradePoints[sswd] * credits) + (gradePoints[ob] * credits);
    const gpa = totalGradeScores / totalPossibleCredits;

    alert("Your GPA is: " + gpa.toFixed(2));
  }

  return (
    <SafeAreaView>
      <View>
        <Text>GPA Calculator</Text>
      </View>

      <View>
        <Text>Maths</Text>
        <TextInput
          placeholder="Grade"
          onChangeText={setSswd}
        />
      </View>

      <View>
        <Text>Organisational Behaviour</Text>
        <TextInput
          placeholder="Grade"
          onChangeText={setOb}
        />
      </View>

      <View>
        <Button title="Submit" onPress={clickMe} />
      </View>
    </SafeAreaView>
  );
}
