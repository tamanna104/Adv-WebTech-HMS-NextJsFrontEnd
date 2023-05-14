//import Dashlayout from "../components/dashLayout"
import Dashlayout from "@/pages/components/dashLayout"
import Image from "next/image"
import SessionCheck from "../components/sessionCheck"
import axios from "axios";
import dynamic from 'next/dynamic';
export default function dashBoard(props) {
  const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
  const barChartOptions = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: ['Admin', 'Hospitals', 'Blood Banks']
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
  }
  const barChartSeries = [{
    name: 'series-1',
    data: [props.aCount, props.hCount, props.bCount]
  }]

  const graphSeries = [{
    name: 'hospital1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'hospital2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }, {
    name: 'hospital3',
    data: [9, 22, 25, 12, 14, 62, 91]
  }]
  const graphOptions = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }

 
  
    return (
      <>
        <SessionCheck/>
        <Dashlayout title = "DashBoard"/>

        {/* <div align="center" style={{display: 'flex', marginTop: 15}}>
          <ApexCharts options={barChartOptions} series={barChartSeries} type="bar" width={500} height={350} />
          <ApexCharts options={graphOptions} series={graphSeries} type="area" width={500} height={350} /> */}
          {/* <Image src="/statistic.png" alt="me" width="200" height="200" /> */}
          {/* <Image src="/bar-chart.png" alt="me" width="200" height="200" />
          <Image src="/analytics.png" alt="me" width="180" height="180" />
          <Image src="/pie-chart.png" alt="me" width="180" height="180" /> */}
        {/* </div> */}
        <div class="flex items-center justify-center mt-11 float-auto h- screen ml-1/6">
        <div class="mx-4">
          <ApexCharts options={barChartOptions} series={barChartSeries} type="bar" width={500} height={350} />
        </div>
        <div className="mx-4">
        <ApexCharts options={graphOptions} series={graphSeries} type="area" width={500} height={350} />
        </div>
      </div>
      </>
    )
  }
  
  export async function getServerSideProps() {
    const adminCount = await axios.get('https://adv-webtech-hms-nestjs-production.up.railway.app/admin/countAdmin');
    const hospitalCount = await axios.get('https://adv-webtech-hms-nestjs-production.up.railway.app/hospital/countHospital');
    const bloodBankCount = await axios.get('https://adv-webtech-hms-nestjs-production.up.railway.app/bloodBank/countBloodBank');

    const data = {
      aCount: await adminCount.data,
      hCount: await hospitalCount.data,
      bCount: await bloodBankCount.data
    }
    return { props: data }
  }