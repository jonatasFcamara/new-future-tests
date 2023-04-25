export const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
};

export const chartConfig = {
  backgroundGradientFrom: 'none',
  backgroundGradientTo: 'none',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

export const styles = {
  marginVertical: 8,
  paddingRight: 16
};
