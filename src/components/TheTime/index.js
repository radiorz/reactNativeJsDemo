/**
 * @file: 现在是为主页
 * @description: 现在是为人员具体信息页 + 按钮
 */

import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';
import {useTailwind} from 'tailwind-rn';
import {useTranslation} from 'react-i18next';
export default function TheTime({style}) {
  const tw = useTailwind();
  const {t} = useTranslation();
  const [time, setTime] = useState(getFormatTime(t));
  useEffect(() => {
    const pid = setInterval(() => {
      setTime(getFormatTime(t));
    });
    return () => {
      clearInterval(pid);
    };
  });
  return <Text style={[tw('flex-nowrap'), style]}>{time}</Text>;
}

function getFormatTime(t) {
  const time = dayjs();
  return time
    .format('YYYY-MM-DD WEEK HH:mm:ss')
    .replace('WEEK', t(`default.weekFull.${time.day()}`));
}
