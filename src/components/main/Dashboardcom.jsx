//از کامبوننت های جدول کور یو ای برای نمایش اطلاعات ابتدایی استفاده کردم 
import {
    CRow,
    CCol,
    CWidgetStatsA,
    CDropdown,
    CDropdownToggle,
    CDropdownItem,
    CDropdownMenu,
  } from "@coreui/react";
  import CIcon from "@coreui/icons-react";
  import { cilArrowTop, cilOptions } from "@coreui/icons";
  import { CChartBar, CChartLine } from "@coreui/react-chartjs";
  import usersData from "../../data/UserData";
  import AdvertiseData from "../../data/AdvertiseData";
  const Dashboardcom = () => {
    const UserData = usersData;
    const AdvertiseDataa = AdvertiseData

    return (
      <div className="p-3 d-flex align-items-center">
        <CRow >
        <CCol sm={6}>
          <CWidgetStatsA
            className="mb-4"
            color="primary"
            value={
              <>
                 {usersData.length}نفر عضو{" "}
                <span className="fs-6 fw-normal">
                </span>
              </>
            }
            title="تعداد کاربران"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle
                  color="transparent"
                  caret={false}
                  className="p-0"
                >
                  <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "My First dataset",
                      backgroundColor: "transparent",
                      borderColor: "rgba(255,255,255,.55)",
                      pointBackgroundColor: "#5856d6",
                      data: [10, 59, 84, 84, 51, 55, 40],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      border: {
                        display: false,
                      },
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: -30,
                      max: 89,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                      tension: 0.4,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
        <CCol sm={6}>
          <CWidgetStatsA
            className="mb-4"
            color="info"
            value={
              <>
                {AdvertiseDataa.length}{" "}
                <span className="fs-6 fw-normal">
                </span>
              </>
            }
            title="تعداد اگهی های ثبت شده"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle
                  color="transparent"
                  caret={false}
                  className="p-0"
                >
                  <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "My First dataset",
                      backgroundColor: "transparent",
                      borderColor: "rgba(255,255,255,.55)",
                      pointBackgroundColor: "#39f",
                      data: [1, 18, 9, 17,37, 22, 11],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      border: {
                        display: false,
                      },
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: -9,
                      max: 39,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
        <CCol sm={6}>
          <CWidgetStatsA
            className="mb-4"
            color="warning"
            value={
              <>
                15 نفر{" "}
                <span className="fs-6 fw-normal">
                  (%2+ <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="تعداد عضو جدید کارجو در روز جاری"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle
                  color="transparent"
                  caret={false}
                  className="p-0"
                >
                  <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                className="mt-3"
                style={{ height: "70px" }}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "My First dataset",
                      backgroundColor: "rgba(255,255,255,.2)",
                      borderColor: "rgba(255,255,255,.55)",
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      display: false,
                    },
                    y: {
                      display: false,
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 2,
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
        <CCol sm={6}>
          <CWidgetStatsA
            className="mb-4"
            color="danger"
            value={
              <>
                1 نفر{" "}
                <span className="fs-6 fw-normal">
                  (%.025+ <CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="تعداد عضو کارفرما در روز جاری"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle
                  color="transparent"
                  caret={false}
                  className="p-0"
                >
                  <CIcon icon={cilOptions} className="text-white" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                    "January",
                    "February",
                    "March",
                    "April",
                  ],
                  datasets: [
                    {
                      label: "My First dataset",
                      backgroundColor: "rgba(255,255,255,.2)",
                      borderColor: "rgba(255,255,255,.55)",
                      data: [
                        78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84,
                        67, 82,
                      ],
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      border: {
                        display: false,
                      },
                      grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            }
          />
        </CCol>
      </CRow>
      </div>
      
    );
  };
  
  export default Dashboardcom;
  
