/*
Copyright 2016 Capital One Services, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.

SPDX-Copyright: Copyright (c) Capital One Services, LLC
SPDX-License-Identifier: Apache-2.0
*/

'use strict'

import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

import { SmoothLine } from 'react-native-pathjs-charts'

class SmoothLineChartBasic extends Component {
  render() {


    let data = [
      [{
        "x": 1,
        "y": 60
      },
      {
        "x": 12,
        "y": 80
      },
      {
        "x": 30,
        "y": 40
      }]
    ]

    let options = {
      width: 200,
      height: 200,
      areasOpacity: 0.5,
      strokeWidth: 5,
      color: '#2980B9',
      lastPoint: {
        r: 10,
        fill: 'white'
      },
      margin: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        min: 1,
        max: 30,
        showAxis: false,
        showLines: false,
        showLabels: true,
        showTicks: false,
        zeroAxis: true,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        },
        tickValues: [0, 10, 20],
        // tickCount: 3,
        labelFunction: (item, index) => {
            // if (index == 4) {
            //   return " "
            // }
            return "Nov " + item
        }
      },
      axisY: {
        min: 0,
        max: 100,
        showAxis: false,
        showLines: false,
        showLabels: true,
        showTicks: false,
        zeroAxis: true,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        },
        tickCount: 5,
        labelFunction: (item, index) => {
          if (index == 0) {
            return " "
          }

          return item
        }
      }
    }

    return (
      <View style={{backgroundColor: '#000000'}}>
        <SmoothLine data={data} options={options} xKey='x' yKey='y' />
      </View>
    )
  }
}

export default SmoothLineChartBasic;
