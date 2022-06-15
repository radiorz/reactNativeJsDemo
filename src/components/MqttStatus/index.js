/**
 * @file: mqtt状态
 * @description:
 */

import React, {useEffect, useState} from 'react';
import {Badge} from '@rneui/themed';
export default function MqttStatus() {
  // TODO store 获取
  const [isConnect, setIsConnect] = useState(false);
  useEffect(() => {});
  return <Badge size="md" status={isConnect ? 'success' : 'error'} />;
}
