function getValues(row) {
  var freq = document.getElementById("freq" + row).innerHTML;
  console.log(freq);

  document.getElementById("cable" + row).innerHTML = find_res(freq, cable);
  document.getElementById("af" + row).innerHTML = find_res(freq, ant);
  document.getElementById("amp" + row).innerHTML = find_res(freq, amp);

  level = (
    parseFloat(document.getElementById("raw" + row).innerHTML) +
    parseFloat(document.getElementById("cable" + row).innerHTML) +
    parseFloat(document.getElementById("af" + row).innerHTML) -
    parseFloat(document.getElementById("amp" + row).innerHTML)
  ).toFixed(2);
  document.getElementById("level" + row).innerHTML = level;
  document.getElementById("margin" + row).innerHTML = (
    level - document.getElementById("limit" + row).innerHTML
  ).toFixed(2);

  if (level - document.getElementById("limit" + row).innerHTML < 0) {
    document.getElementById("pf" + row).innerHTML = "Pass";
  } else {
    document.getElementById("pf" + row).innerHTML = "Fail";
  }

  console.log(cable["Freq"]);
}

function find_req_idx(lst, target) {
  var i;
  for (i = 0; i < lst.length; i++) {
    if (lst[i] >= target) {
      return i;
    }
  }
}

var cable = [
  {
    Freq: 1000,
    Result: 1.88
  },
  {
    Freq: 1250,
    Result: 2.1
  },
  {
    Freq: 1500,
    Result: 2.34
  },
  {
    Freq: 1750,
    Result: 2.58
  },
  {
    Freq: 2000,
    Result: 2.74
  },
  {
    Freq: 2250,
    Result: 2.89
  },
  {
    Freq: 2500,
    Result: 3
  },
  {
    Freq: 2750,
    Result: 3.15
  },
  {
    Freq: 3000,
    Result: 3.27
  },
  {
    Freq: 3250,
    Result: 3.47
  },
  {
    Freq: 3500,
    Result: 3.58
  },
  {
    Freq: 3750,
    Result: 3.57
  },
  {
    Freq: 4000,
    Result: 3.85
  },
  {
    Freq: 4250,
    Result: 3.94
  },
  {
    Freq: 4500,
    Result: 4.24
  },
  {
    Freq: 4750,
    Result: 4.05
  },
  {
    Freq: 5000,
    Result: 4.29
  },
  {
    Freq: 5250,
    Result: 4.35
  },
  {
    Freq: 5500,
    Result: 4.46
  },
  {
    Freq: 5750,
    Result: 4.6
  },
  {
    Freq: 6000,
    Result: 4.85
  },
  {
    Freq: 6250,
    Result: 4.65
  },
  {
    Freq: 6500,
    Result: 4.84
  },
  {
    Freq: 6750,
    Result: 5.01
  },
  {
    Freq: 7000,
    Result: 5.08
  },
  {
    Freq: 7250,
    Result: 5.16
  },
  {
    Freq: 7500,
    Result: 5.13
  },
  {
    Freq: 7750,
    Result: 5.22
  },
  {
    Freq: 8000,
    Result: 5.43
  },
  {
    Freq: 8250,
    Result: 5.35
  },
  {
    Freq: 8500,
    Result: 5.53
  },
  {
    Freq: 8750,
    Result: 5.63
  },
  {
    Freq: 9000,
    Result: 5.62
  },
  {
    Freq: 9250,
    Result: 5.79
  },
  {
    Freq: 9500,
    Result: 5.69
  },
  {
    Freq: 9750,
    Result: 5.48
  },
  {
    Freq: 10000,
    Result: 5.93
  },
  {
    Freq: 10250,
    Result: 5.94
  },
  {
    Freq: 10500,
    Result: 6.08
  },
  {
    Freq: 10750,
    Result: 6.18
  },
  {
    Freq: 11000,
    Result: 6.13
  },
  {
    Freq: 11250,
    Result: 6.03
  },
  {
    Freq: 11500,
    Result: 6.07
  },
  {
    Freq: 11750,
    Result: 6.28
  },
  {
    Freq: 12000,
    Result: 6.38
  },
  {
    Freq: 12250,
    Result: 6.51
  },
  {
    Freq: 12500,
    Result: 6.55
  },
  {
    Freq: 12750,
    Result: 6.63
  },
  {
    Freq: 13000,
    Result: 6.9
  },
  {
    Freq: 13250,
    Result: 7
  },
  {
    Freq: 13500,
    Result: 7.05
  },
  {
    Freq: 13750,
    Result: 7.12
  },
  {
    Freq: 14000,
    Result: 7.29
  },
  {
    Freq: 14250,
    Result: 7.29
  },
  {
    Freq: 14500,
    Result: 7.34
  },
  {
    Freq: 14750,
    Result: 7.34
  },
  {
    Freq: 15000,
    Result: 7.18
  },
  {
    Freq: 15250,
    Result: 7.57
  },
  {
    Freq: 15500,
    Result: 7.58
  },
  {
    Freq: 15750,
    Result: 7.79
  },
  {
    Freq: 16000,
    Result: 7.8
  },
  {
    Freq: 16250,
    Result: 8.17
  },
  {
    Freq: 16500,
    Result: 8.11
  },
  {
    Freq: 16750,
    Result: 8.05
  },
  {
    Freq: 17000,
    Result: 8.14
  },
  {
    Freq: 17250,
    Result: 8.07
  },
  {
    Freq: 17500,
    Result: 8.27
  },
  {
    Freq: 17750,
    Result: 8.15
  },
  {
    Freq: 18000,
    Result: 7.86
  },
  {
    Freq: 18250,
    Result: 8.06
  },
  {
    Freq: 18500,
    Result: 8.39
  },
  {
    Freq: 18750,
    Result: 8.41
  },
  {
    Freq: 19000,
    Result: 8.45
  },
  {
    Freq: 19250,
    Result: 8.1
  },
  {
    Freq: 19500,
    Result: 8.49
  },
  {
    Freq: 19750,
    Result: 8.57
  },
  {
    Freq: 20000,
    Result: 8.61
  },
  {
    Freq: 20250,
    Result: 8.6
  },
  {
    Freq: 20500,
    Result: 8.68
  },
  {
    Freq: 20750,
    Result: 8.82
  },
  {
    Freq: 21000,
    Result: 9.07
  },
  {
    Freq: 21250,
    Result: 9.04
  },
  {
    Freq: 21500,
    Result: 8.92
  },
  {
    Freq: 21750,
    Result: 9.1
  },
  {
    Freq: 22000,
    Result: 9.12
  },
  {
    Freq: 22250,
    Result: 9.18
  },
  {
    Freq: 22500,
    Result: 9.44
  },
  {
    Freq: 22750,
    Result: 9.41
  },
  {
    Freq: 23000,
    Result: 9.27
  },
  {
    Freq: 23250,
    Result: 9.26
  },
  {
    Freq: 23500,
    Result: 9.43
  },
  {
    Freq: 23750,
    Result: 9.43
  },
  {
    Freq: 24000,
    Result: 9.59
  },
  {
    Freq: 24250,
    Result: 9.67
  },
  {
    Freq: 24500,
    Result: 9.81
  },
  {
    Freq: 24750,
    Result: 9.93
  },
  {
    Freq: 25000,
    Result: 9.75
  },
  {
    Freq: 25250,
    Result: 9.84
  },
  {
    Freq: 25500,
    Result: 9.72
  },
  {
    Freq: 25750,
    Result: 10.04
  },
  {
    Freq: 26000,
    Result: 10.19
  },
  {
    Freq: 26250,
    Result: 10.26
  },
  {
    Freq: 26499.999,
    Result: 10.54
  },
  {
    Freq: 26500,
    Result: 10.42
  },
  {
    Freq: 26750,
    Result: 10.42
  },
  {
    Freq: 27000,
    Result: 10.39
  },
  {
    Freq: 27250,
    Result: 10.68
  },
  {
    Freq: 27500,
    Result: 10.63
  },
  {
    Freq: 27750,
    Result: 10.6
  },
  {
    Freq: 28000,
    Result: 10.89
  },
  {
    Freq: 28250,
    Result: 10.93
  },
  {
    Freq: 28500,
    Result: 10.8
  },
  {
    Freq: 28750,
    Result: 10.93
  },
  {
    Freq: 29000,
    Result: 10.87
  },
  {
    Freq: 29250,
    Result: 10.97
  },
  {
    Freq: 29500,
    Result: 10.93
  },
  {
    Freq: 29750,
    Result: 10.84
  },
  {
    Freq: 30000,
    Result: 11.04
  },
  {
    Freq: 30250,
    Result: 11.23
  },
  {
    Freq: 30500,
    Result: 11.42
  },
  {
    Freq: 30750,
    Result: 11.64
  },
  {
    Freq: 31000,
    Result: 11.57
  },
  {
    Freq: 31250,
    Result: 11.53
  },
  {
    Freq: 31500,
    Result: 11.59
  },
  {
    Freq: 31750,
    Result: 11.55
  },
  {
    Freq: 32000,
    Result: 11.75
  },
  {
    Freq: 32250,
    Result: 12.06
  },
  {
    Freq: 32500,
    Result: 11.84
  },
  {
    Freq: 32750,
    Result: 11.94
  },
  {
    Freq: 33000,
    Result: 12.02
  },
  {
    Freq: 33250,
    Result: 11.52
  },
  {
    Freq: 33500,
    Result: 12.1
  },
  {
    Freq: 33750,
    Result: 11.64
  },
  {
    Freq: 34000,
    Result: 11.64
  },
  {
    Freq: 34250,
    Result: 11.64
  },
  {
    Freq: 34500,
    Result: 11.67
  },
  {
    Freq: 34750,
    Result: 11.48
  },
  {
    Freq: 35000,
    Result: 11.2
  },
  {
    Freq: 35250,
    Result: 11.64
  },
  {
    Freq: 35500,
    Result: 12.33
  },
  {
    Freq: 35750,
    Result: 12.19
  },
  {
    Freq: 36000,
    Result: 12.24
  },
  {
    Freq: 36250,
    Result: 12.18
  },
  {
    Freq: 36500,
    Result: 12.2
  },
  {
    Freq: 36750,
    Result: 12.53
  },
  {
    Freq: 37000,
    Result: 12.48
  },
  {
    Freq: 37250,
    Result: 12.22
  },
  {
    Freq: 37500,
    Result: 11.94
  },
  {
    Freq: 37750,
    Result: 12.43
  },
  {
    Freq: 38000,
    Result: 12.45
  },
  {
    Freq: 38250,
    Result: 12.48
  },
  {
    Freq: 38500,
    Result: 12.3
  },
  {
    Freq: 38750,
    Result: 12.78
  },
  {
    Freq: 39000,
    Result: 13.21
  },
  {
    Freq: 39250,
    Result: 13.11
  },
  {
    Freq: 39500,
    Result: 12.91
  },
  {
    Freq: 39750,
    Result: 12.89
  },
  {
    Freq: 40000,
    Result: 13.08
  }
];

var ant = [
  {
    Freq: 1000,
    Result: 27.8
  },
  {
    Freq: 1050,
    Result: 27.6
  },
  {
    Freq: 1100,
    Result: 27.6
  },
  {
    Freq: 1150,
    Result: 28.3
  },
  {
    Freq: 1200,
    Result: 28.4
  },
  {
    Freq: 1250,
    Result: 29.1
  },
  {
    Freq: 1300,
    Result: 28.8
  },
  {
    Freq: 1350,
    Result: 28.9
  },
  {
    Freq: 1400,
    Result: 28.3
  },
  {
    Freq: 1450,
    Result: 28.2
  },
  {
    Freq: 1500,
    Result: 27.9
  },
  {
    Freq: 1550,
    Result: 28.1
  },
  {
    Freq: 1600,
    Result: 28.3
  },
  {
    Freq: 1650,
    Result: 28.7
  },
  {
    Freq: 1700,
    Result: 29.4
  },
  {
    Freq: 1750,
    Result: 29.9
  },
  {
    Freq: 1800,
    Result: 30.7
  },
  {
    Freq: 1850,
    Result: 30.9
  },
  {
    Freq: 1900,
    Result: 31.5
  },
  {
    Freq: 1950,
    Result: 31.3
  },
  {
    Freq: 2000,
    Result: 31.7
  },
  {
    Freq: 2050,
    Result: 31.3
  },
  {
    Freq: 2100,
    Result: 31.6
  },
  {
    Freq: 2150,
    Result: 31.3
  },
  {
    Freq: 2200,
    Result: 31.5
  },
  {
    Freq: 2250,
    Result: 31.4
  },
  {
    Freq: 2300,
    Result: 31.7
  },
  {
    Freq: 2350,
    Result: 31.8
  },
  {
    Freq: 2400,
    Result: 31.9
  },
  {
    Freq: 2450,
    Result: 32.2
  },
  {
    Freq: 2500,
    Result: 32.2
  },
  {
    Freq: 2550,
    Result: 32.4
  },
  {
    Freq: 2600,
    Result: 32.3
  },
  {
    Freq: 2650,
    Result: 32.5
  },
  {
    Freq: 2700,
    Result: 32.3
  },
  {
    Freq: 2750,
    Result: 32.4
  },
  {
    Freq: 2800,
    Result: 32.2
  },
  {
    Freq: 2850,
    Result: 32.4
  },
  {
    Freq: 2900,
    Result: 32.4
  },
  {
    Freq: 2950,
    Result: 32.6
  },
  {
    Freq: 3000,
    Result: 32.6
  },
  {
    Freq: 3050,
    Result: 32.8
  },
  {
    Freq: 3100,
    Result: 32.9
  },
  {
    Freq: 3150,
    Result: 32.9
  },
  {
    Freq: 3200,
    Result: 32.9
  },
  {
    Freq: 3250,
    Result: 32.9
  },
  {
    Freq: 3300,
    Result: 32.9
  },
  {
    Freq: 3350,
    Result: 32.9
  },
  {
    Freq: 3400,
    Result: 32.9
  },
  {
    Freq: 3450,
    Result: 32.9
  },
  {
    Freq: 3500,
    Result: 32.9
  },
  {
    Freq: 3550,
    Result: 32.9
  },
  {
    Freq: 3600,
    Result: 33
  },
  {
    Freq: 3650,
    Result: 33.1
  },
  {
    Freq: 3700,
    Result: 33.2
  },
  {
    Freq: 3750,
    Result: 33.3
  },
  {
    Freq: 3800,
    Result: 33.4
  },
  {
    Freq: 3850,
    Result: 33.5
  },
  {
    Freq: 3900,
    Result: 33.6
  },
  {
    Freq: 3950,
    Result: 33.6
  },
  {
    Freq: 4000,
    Result: 33.7
  },
  {
    Freq: 4050,
    Result: 33.7
  },
  {
    Freq: 4100,
    Result: 33.7
  },
  {
    Freq: 4150,
    Result: 33.7
  },
  {
    Freq: 4200,
    Result: 33.7
  },
  {
    Freq: 4250,
    Result: 33.7
  },
  {
    Freq: 4300,
    Result: 33.7
  },
  {
    Freq: 4350,
    Result: 33.8
  },
  {
    Freq: 4400,
    Result: 33.9
  },
  {
    Freq: 4450,
    Result: 34
  },
  {
    Freq: 4500,
    Result: 34.1
  },
  {
    Freq: 4550,
    Result: 34.3
  },
  {
    Freq: 4600,
    Result: 34.4
  },
  {
    Freq: 4650,
    Result: 34.5
  },
  {
    Freq: 4700,
    Result: 34.5
  },
  {
    Freq: 4750,
    Result: 34.5
  },
  {
    Freq: 4800,
    Result: 34.5
  },
  {
    Freq: 4850,
    Result: 34.5
  },
  {
    Freq: 4900,
    Result: 34.4
  },
  {
    Freq: 4950,
    Result: 34.4
  },
  {
    Freq: 5000,
    Result: 34.3
  },
  {
    Freq: 5050,
    Result: 34.3
  },
  {
    Freq: 5100,
    Result: 34.4
  },
  {
    Freq: 5150,
    Result: 34.4
  },
  {
    Freq: 5200,
    Result: 34.5
  },
  {
    Freq: 5250,
    Result: 34.6
  },
  {
    Freq: 5300,
    Result: 34.6
  },
  {
    Freq: 5350,
    Result: 34.6
  },
  {
    Freq: 5400,
    Result: 34.6
  },
  {
    Freq: 5450,
    Result: 34.5
  },
  {
    Freq: 5500,
    Result: 34.5
  },
  {
    Freq: 5550,
    Result: 34.5
  },
  {
    Freq: 5600,
    Result: 34.5
  },
  {
    Freq: 5650,
    Result: 34.5
  },
  {
    Freq: 5700,
    Result: 34.6
  },
  {
    Freq: 5750,
    Result: 34.7
  },
  {
    Freq: 5800,
    Result: 34.8
  },
  {
    Freq: 5850,
    Result: 34.9
  },
  {
    Freq: 5900,
    Result: 35
  },
  {
    Freq: 5950,
    Result: 35.1
  },
  {
    Freq: 6000,
    Result: 35.2
  },
  {
    Freq: 6050,
    Result: 35.3
  },
  {
    Freq: 6100,
    Result: 35.4
  },
  {
    Freq: 6150,
    Result: 35.4
  },
  {
    Freq: 6200,
    Result: 35.4
  },
  {
    Freq: 6250,
    Result: 35.5
  },
  {
    Freq: 6300,
    Result: 35.5
  },
  {
    Freq: 6350,
    Result: 35.6
  },
  {
    Freq: 6400,
    Result: 35.6
  },
  {
    Freq: 6450,
    Result: 35.7
  },
  {
    Freq: 6500,
    Result: 35.7
  },
  {
    Freq: 6550,
    Result: 35.7
  },
  {
    Freq: 6600,
    Result: 35.7
  },
  {
    Freq: 6650,
    Result: 35.7
  },
  {
    Freq: 6700,
    Result: 35.7
  },
  {
    Freq: 6750,
    Result: 35.7
  },
  {
    Freq: 6800,
    Result: 35.7
  },
  {
    Freq: 6850,
    Result: 35.7
  },
  {
    Freq: 6900,
    Result: 35.7
  },
  {
    Freq: 6950,
    Result: 35.7
  },
  {
    Freq: 7000,
    Result: 35.7
  },
  {
    Freq: 7050,
    Result: 35.7
  },
  {
    Freq: 7100,
    Result: 35.7
  },
  {
    Freq: 7150,
    Result: 35.7
  },
  {
    Freq: 7200,
    Result: 35.7
  },
  {
    Freq: 7250,
    Result: 35.7
  },
  {
    Freq: 7300,
    Result: 35.7
  },
  {
    Freq: 7350,
    Result: 35.7
  },
  {
    Freq: 7400,
    Result: 35.7
  },
  {
    Freq: 7450,
    Result: 35.7
  },
  {
    Freq: 7500,
    Result: 35.7
  },
  {
    Freq: 7550,
    Result: 35.7
  },
  {
    Freq: 7600,
    Result: 35.7
  },
  {
    Freq: 7650,
    Result: 35.8
  },
  {
    Freq: 7700,
    Result: 35.8
  },
  {
    Freq: 7750,
    Result: 35.8
  },
  {
    Freq: 7800,
    Result: 35.8
  },
  {
    Freq: 7850,
    Result: 35.8
  },
  {
    Freq: 7900,
    Result: 35.8
  },
  {
    Freq: 7950,
    Result: 35.8
  },
  {
    Freq: 8000,
    Result: 35.8
  },
  {
    Freq: 8050,
    Result: 35.8
  },
  {
    Freq: 8100,
    Result: 35.8
  },
  {
    Freq: 8150,
    Result: 35.8
  },
  {
    Freq: 8200,
    Result: 35.8
  },
  {
    Freq: 8250,
    Result: 35.8
  },
  {
    Freq: 8300,
    Result: 35.8
  },
  {
    Freq: 8350,
    Result: 35.8
  },
  {
    Freq: 8400,
    Result: 35.8
  },
  {
    Freq: 8450,
    Result: 35.8
  },
  {
    Freq: 8500,
    Result: 35.8
  },
  {
    Freq: 8550,
    Result: 35.8
  },
  {
    Freq: 8600,
    Result: 35.9
  },
  {
    Freq: 8650,
    Result: 35.9
  },
  {
    Freq: 8700,
    Result: 36
  },
  {
    Freq: 8750,
    Result: 36
  },
  {
    Freq: 8800,
    Result: 36.1
  },
  {
    Freq: 8850,
    Result: 36.1
  },
  {
    Freq: 8900,
    Result: 36.1
  },
  {
    Freq: 8950,
    Result: 36.1
  },
  {
    Freq: 9000,
    Result: 36.2
  },
  {
    Freq: 9050,
    Result: 36.2
  },
  {
    Freq: 9100,
    Result: 36.2
  },
  {
    Freq: 9150,
    Result: 36.2
  },
  {
    Freq: 9200,
    Result: 36.3
  },
  {
    Freq: 9250,
    Result: 36.3
  },
  {
    Freq: 9300,
    Result: 36.4
  },
  {
    Freq: 9350,
    Result: 36.5
  },
  {
    Freq: 9400,
    Result: 36.5
  },
  {
    Freq: 9450,
    Result: 36.5
  },
  {
    Freq: 9500,
    Result: 36.6
  },
  {
    Freq: 9550,
    Result: 36.6
  },
  {
    Freq: 9600,
    Result: 36.6
  },
  {
    Freq: 9650,
    Result: 36.7
  },
  {
    Freq: 9700,
    Result: 36.8
  },
  {
    Freq: 9750,
    Result: 36.8
  },
  {
    Freq: 9800,
    Result: 36.9
  },
  {
    Freq: 9850,
    Result: 37
  },
  {
    Freq: 9900,
    Result: 37.1
  },
  {
    Freq: 9950,
    Result: 37.1
  },
  {
    Freq: 10000,
    Result: 37.2
  },
  {
    Freq: 10100,
    Result: 37.3
  },
  {
    Freq: 10200,
    Result: 37.4
  },
  {
    Freq: 10300,
    Result: 37.5
  },
  {
    Freq: 10400,
    Result: 37.6
  },
  {
    Freq: 10500,
    Result: 37.7
  },
  {
    Freq: 10600,
    Result: 37.8
  },
  {
    Freq: 10700,
    Result: 37.8
  },
  {
    Freq: 10800,
    Result: 37.8
  },
  {
    Freq: 10900,
    Result: 37.9
  },
  {
    Freq: 11000,
    Result: 38
  },
  {
    Freq: 11100,
    Result: 38
  },
  {
    Freq: 11200,
    Result: 38
  },
  {
    Freq: 11300,
    Result: 38
  },
  {
    Freq: 11400,
    Result: 38.1
  },
  {
    Freq: 11500,
    Result: 38.1
  },
  {
    Freq: 11600,
    Result: 38.2
  },
  {
    Freq: 11700,
    Result: 38.4
  },
  {
    Freq: 11800,
    Result: 38.6
  },
  {
    Freq: 11900,
    Result: 38.7
  },
  {
    Freq: 12000,
    Result: 38.8
  },
  {
    Freq: 12100,
    Result: 38.8
  },
  {
    Freq: 12200,
    Result: 38.9
  },
  {
    Freq: 12300,
    Result: 38.9
  },
  {
    Freq: 12400,
    Result: 39
  },
  {
    Freq: 12500,
    Result: 39
  },
  {
    Freq: 12600,
    Result: 39
  },
  {
    Freq: 12700,
    Result: 39
  },
  {
    Freq: 12800,
    Result: 39.1
  },
  {
    Freq: 12900,
    Result: 39
  },
  {
    Freq: 13000,
    Result: 38.9
  },
  {
    Freq: 13100,
    Result: 38.7
  },
  {
    Freq: 13200,
    Result: 38.7
  },
  {
    Freq: 13300,
    Result: 38.8
  },
  {
    Freq: 13400,
    Result: 38.8
  },
  {
    Freq: 13500,
    Result: 38.7
  },
  {
    Freq: 13600,
    Result: 38.8
  },
  {
    Freq: 13700,
    Result: 38.8
  },
  {
    Freq: 13800,
    Result: 38.7
  },
  {
    Freq: 13900,
    Result: 38.9
  },
  {
    Freq: 14000,
    Result: 39.1
  },
  {
    Freq: 14100,
    Result: 39.3
  },
  {
    Freq: 14200,
    Result: 39.3
  },
  {
    Freq: 14300,
    Result: 39.4
  },
  {
    Freq: 14400,
    Result: 39.6
  },
  {
    Freq: 14500,
    Result: 39.8
  },
  {
    Freq: 14600,
    Result: 39.8
  },
  {
    Freq: 14700,
    Result: 39.9
  },
  {
    Freq: 14800,
    Result: 39.9
  },
  {
    Freq: 14900,
    Result: 39.9
  },
  {
    Freq: 15000,
    Result: 39.8
  },
  {
    Freq: 15100,
    Result: 39.7
  },
  {
    Freq: 15200,
    Result: 39.8
  },
  {
    Freq: 15300,
    Result: 39.8
  },
  {
    Freq: 15400,
    Result: 39.8
  },
  {
    Freq: 15500,
    Result: 40
  },
  {
    Freq: 15600,
    Result: 40.1
  },
  {
    Freq: 15700,
    Result: 40.3
  },
  {
    Freq: 15800,
    Result: 40.5
  },
  {
    Freq: 15900,
    Result: 40.8
  },
  {
    Freq: 16000,
    Result: 41
  },
  {
    Freq: 16100,
    Result: 41.1
  },
  {
    Freq: 16200,
    Result: 41.1
  },
  {
    Freq: 16300,
    Result: 41.3
  },
  {
    Freq: 16400,
    Result: 41.4
  },
  {
    Freq: 16500,
    Result: 41.6
  },
  {
    Freq: 16600,
    Result: 41.8
  },
  {
    Freq: 16700,
    Result: 41.9
  },
  {
    Freq: 16800,
    Result: 41.9
  },
  {
    Freq: 16900,
    Result: 41.7
  },
  {
    Freq: 17000,
    Result: 41.5
  },
  {
    Freq: 17100,
    Result: 41.3
  },
  {
    Freq: 17200,
    Result: 41.1
  },
  {
    Freq: 17300,
    Result: 40.9
  },
  {
    Freq: 17400,
    Result: 40.9
  },
  {
    Freq: 17500,
    Result: 40.9
  },
  {
    Freq: 17600,
    Result: 40.9
  },
  {
    Freq: 17700,
    Result: 40.9
  },
  {
    Freq: 17800,
    Result: 41.1
  },
  {
    Freq: 17900,
    Result: 41.3
  },
  {
    Freq: 18000,
    Result: 41.3
  }
];

var amp = [
  {
    Freq: 1000,
    Result: 35.65
  },
  {
    Freq: 1500,
    Result: 34.38
  },
  {
    Freq: 2000,
    Result: 34.05
  },
  {
    Freq: 2500,
    Result: 35.91
  },
  {
    Freq: 3000,
    Result: 34.22
  },
  {
    Freq: 3500,
    Result: 34.66
  },
  {
    Freq: 4000,
    Result: 33.98
  },
  {
    Freq: 4500,
    Result: 35.39
  },
  {
    Freq: 5000,
    Result: 35.45
  },
  {
    Freq: 5500,
    Result: 35.5
  },
  {
    Freq: 6000,
    Result: 35.62
  },
  {
    Freq: 6500,
    Result: 35.92
  },
  {
    Freq: 7000,
    Result: 36.08
  },
  {
    Freq: 7500,
    Result: 36.25
  },
  {
    Freq: 8000,
    Result: 36.48
  },
  {
    Freq: 8500,
    Result: 36.6
  },
  {
    Freq: 9000,
    Result: 36.05
  },
  {
    Freq: 9500,
    Result: 36.17
  },
  {
    Freq: 10000,
    Result: 35.87
  },
  {
    Freq: 10500,
    Result: 36.15
  },
  {
    Freq: 11000,
    Result: 35.92
  },
  {
    Freq: 11500,
    Result: 35.78
  },
  {
    Freq: 12000,
    Result: 35.45
  },
  {
    Freq: 12500,
    Result: 34.84
  },
  {
    Freq: 13000,
    Result: 34.07
  },
  {
    Freq: 13500,
    Result: 33.87
  },
  {
    Freq: 14000,
    Result: 34.74
  },
  {
    Freq: 14500,
    Result: 34.26
  },
  {
    Freq: 15000,
    Result: 34.29
  },
  {
    Freq: 15500,
    Result: 34.72
  },
  {
    Freq: 16000,
    Result: 34.98
  },
  {
    Freq: 16500,
    Result: 35.72
  },
  {
    Freq: 17000,
    Result: 34.86
  },
  {
    Freq: 17500,
    Result: 33.14
  },
  {
    Freq: 18000,
    Result: 32.54
  },
  {
    Freq: 18500,
    Result: 33.11
  },
  {
    Freq: 19000,
    Result: 34.74
  },
  {
    Freq: 19500,
    Result: 34.77
  },
  {
    Freq: 20000,
    Result: 32.87
  },
  {
    Freq: 20500,
    Result: 32.08
  },
  {
    Freq: 21000,
    Result: 34.22
  },
  {
    Freq: 21500,
    Result: 32.63
  },
  {
    Freq: 22000,
    Result: 33.16
  },
  {
    Freq: 22500,
    Result: 33.32
  },
  {
    Freq: 23000,
    Result: 31.94
  },
  {
    Freq: 23500,
    Result: 31.87
  },
  {
    Freq: 24000,
    Result: 31.56
  },
  {
    Freq: 24500,
    Result: 30.49
  },
  {
    Freq: 25000,
    Result: 29.91
  },
  {
    Freq: 25500,
    Result: 30.41
  },
  {
    Freq: 26000,
    Result: 26.52
  },
  {
    Freq: 26500,
    Result: 21.87
  }
];

function find_res(freq, table) {
  var i;
  var table_list = [];
  var freq_high;
  var freq_low;
  var data_high;
  var data_low;
  for (i = 0; i < table.length; i++) {
    table_list.push(table[i]["Freq"]);
  }

  idx1 = find_req_idx(table_list, freq);
  freq_high = table_list[idx1];
  freq_low = table_list[idx1 - 1];
  data_high = table[idx1]["Result"];
  data_low = table[idx1 - 1]["Result"];
  data =
    data_low +
    (data_high - data_low) * (freq - freq_low) / (freq_high - freq_low);
  return data.toFixed(2);
}
