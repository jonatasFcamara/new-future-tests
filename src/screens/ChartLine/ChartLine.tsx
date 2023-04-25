import React, { useState } from 'react';
import { LineChart} from 'react-native-chart-kit';
import { Svg, Circle, G, Line, Rect, Text } from 'react-native-svg';
import { lineData, chartConfig, styles } from './data';
import { Container } from './styles';

export function ChartLine() {
  const [tooltipData, setTooltipData] = useState({ visible: false, x: 0, y: 0, value: 0 });

  function handleTooltip(x: number, y: number, value: number) {
    setTooltipData({
      visible: true,
      x: x,
      y: y,
      value: value
    });
  }

  return(
    <Container>
      <LineChart
        data={lineData}
        width={350}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles}
        withInnerLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        decorator={() => {
          return tooltipData.visible && (
            <G x={tooltipData.x - 30} y={tooltipData.y - 40}>
              <Rect height={30} width={60} stroke="#999" fill="white" ry={10} rx={10} />
              <Line x1={30} y1={30} x2={tooltipData.x < 150 ? 30 : 0} y2={60} stroke="#999" />
              <Text
                x={30}
                y={20}
                textAnchor="middle"
                fontSize={16}
                fontWeight="bold"
                fill="#333"
              >
                {tooltipData.value}
              </Text>
            </G>
          );
        }}
        onDataPointClick={({ x, y, value }) => handleTooltip(x, y, value)}
      />
    </Container>
  );
}
