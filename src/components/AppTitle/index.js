/**
 * @file: AppTitle
 * @description:是app 的标题部分F
 */

import React from 'react';
import {Skeleton, Avatar, Text} from '@rneui/themed';
import {useTailwind} from 'tailwind-rn';
export default function AppTitle() {
  const tw = useTailwind();
  return (
    <>
      <Skeleton circle={true} width={30} height={30}>
        {/* <Avatar source={require('')} /> */}
      </Skeleton>

      <Text style={tw('text-2xl text-white')}> 这里是标题</Text>
    </>
  );
}
