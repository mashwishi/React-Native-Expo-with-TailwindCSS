import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledSafeArea = styled(SafeAreaView);
const StyledText = styled(Text);

export default function App() {
    return (
        <StyledSafeArea className='flex bg-white items-center justify-center'>
            <StyledText className='text-black text-center text-lg p-4'>React Native Expo in TypeScript with Tailwind CSS</StyledText>
        </StyledSafeArea>
    );
}
