import {
  AlertOutlined,
  LeftSquareFilled,
  PlayCircleTwoTone,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  ModalForm,
  ProCard,
  ProForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormTimePicker,
  ProTable,
} from "@ant-design/pro-components";
import { Tabs, Card, Button, Dropdown, TimePicker } from "antd";
import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

const Teacherdashboard = () => {
  const navigate = useNavigate();
  const co = [
    {
      label: "20",
      value: "20",
    },
    {
      label: "25",
      value: "25",
    },
    {
      label: "30",
      value: "30",
    },
    {
      label: "35",
      value: "35",
    },
    {
      label: "40",
      value: "40",
    },
    {
      label: "22",
      value: "22",
    },
    {
      label: "24",
      value: "24",
    },
    {
      label: "28",
      value: "28",
    },
    {
      label: "34",
      value: "34",
    },
    {
      label: "38",
      value: "38",
    },
    {
      label: "32",
      value: "32",
    },
    {
      label: "21",
      value: "21",
    },
  ];
  const menu = [
    {
      key: "1",
      label: "Edit",
    },
    {
      key: "2",
      label: "Delete",
    },
    {
      key: "3",
      label: "Send to Approve",
    },
  ];
  const opt = [
    {
      label: "no offer",
      value: "no offer",
    },
    {
      label: "5%",
      value: "5%",
    },
    {
      label: "10%",
      value: "10%",
    },
    {
      label: "20%",
      value: "20%",
    },
    {
      label: "30%",
      value: "30%",
    },
    {
      label: "40%",
      value: "40%",
    },
    {
      label: "50%",
      value: "50%",
    },
  ];
  const option = [
    {
      label: "Negociable",
      value: "Negociable",
    },
    { label: "Fixed", value: "Fixed" },
  ];
  const options = [
    { label: "2 years", value: "2 years" },
    { label: "3 years", value: "3 years" },
    { label: "1 year", value: "1 year" },
    { label: "10 months", value: "10months" },
    { label: "12 months", value: "12months" },
    { label: "6 months", value: "6months" },
    { label: "5 months", value: "5 months" },
    { label: "3 months", value: "3months" },
    { label: "1 months", value: "1 months" },
    { label: "3 weeks", value: "3 weeks" },
  ];
  const signup = JSON.parse(localStorage.getItem("signupdata"));
  const columns = [
    {
      title: "Course Name",
      dataindex: "coursename",
      key: "coursename",
    },
    {
      title: "Which type of Course",
      dataindex: "coursetype",
      key: "coursetype",
    },
    {
      title: "Duration",
      dataindex: "duration",
      key: "duration",
    },
    {
      title: "Course Price",
      dataindex: "courseprice",
      key: "courseprice",
    },
    {
      title: "Price Status",
      dataindex: "pricestatus",
      key: "pricestatus",
    },
    {
      title: "Course Starting Date",
      dataindex: "coursestartdate",
      key: "coursestartdate",
    },
    {
      title: "Course Ending Date",
      dataindex: "courseend",
      key: "courseend",
    },
    {
      title: "Offers",
      dataindex: "offers",
      key: "offers",
    },
    {
      title: "Timing",
      dataindex: "timing",
      key: "timing",
    },
    {
      title: "Description",
      dataindex: "description",
      key: "description",
    },
    {
      title: "Teacher Name",
      dataindex: "teachernames",
      key: "teachernames",
    },
    {
      title: "Teacher Age",
      dataindex: "teacherage",
      key: "teacherage",
    },
    {
      title: "Teacher Gender",
      dataindex: "teachergender",
      key: "teachergender",
    },
    {
      title: "Teaching Experience",
      dataindex: "teacherexperience",
      key: "teacherexperience",
    },
    {
      title: "Class Capacity",
      dataindex: "classcapacity",
      key: "classcapacity",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Dropdown menu={{ items: menu }}>
            <Button shape="circle" icon={<SettingOutlined />} className="btn" />
          </Dropdown>
        </>
      ),
    },
  ];
  const c =[
    {
      label:"5 students", value:"5 students"
    },
     {
      label:"10 students", value:"10 students"
    },
     {
      label:"15 students", value:"15 students"
    },
     {
      label:"20 students", value:"20 students"
    },
     {
      label:"25 students", value:"25 students"
    },
     {
      label:"30 students", value:"30 students"
    },
     {
      label:"35 students", value:"35 students"
    },
  ]
  const tem = [
    {
      key: "1",
      label: "Create Courses",
      children: (
        <>
          <ProCard
            bordered="true"
            title="Create Courses"
            subTitle="Create your courses here and approve them from admin"
            headStyle={{
              border: "0.3px solid lightgrey",
              borderRadius: "8px",
            }}
            style={{
              backgroundColor: "transparent",
            }}
            extra={
              <ModalForm
                dateFormatter
                submitter={{
                  render: (props, dom) => {
                    return [
                      <Button key="cancel">{/* Cancel button */}Cancel</Button>,
                      <Button key="save" type="primary">
                        {/* Save button */}Save Course
                      </Button>,
                    ];
                  },
                }}
                width={800}
                autoFocusFirstInput
                scrollToFirstError
                title="Create Course"
                trigger={<Button icon={<PlusOutlined />}>Create course</Button>}
              >
                <ProForm.Group>
                  <ProFormText
                    width="md"
                    name="coursename"
                    label="Course Name:"
                    placeholder="Enter course name"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                  />
                  <ProFormSelect
                    width="md"
                    name="coursetype"
                    label="Course Type:"
                    mode="single"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    placeholder="please select course type"
                    options={signup.expertise.map((item) => ({
                      label: item,
                      value: item,
                    }))}
                  />
                  <ProFormSelect
                    width="md"
                    name="duration"
                    label="Duration:"
                    placeholder="Please select class duration"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    options={options}
                  />
                  <ProFormText
                    width="md"
                    name="courseprice"
                    label="Course Price:"
                    placeholder="please enter your course price"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                  />
                  <ProFormSelect
                    width="md"
                    name="pricesatatus"
                    label="Price Status:"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    placeholder="Please select price status"
                    options={option}
                  />
                  <ProFormDatePicker
                    width="md"
                    name="coursedatestarting"
                    label="Course date staring"
                    placeholder="Please select course starting"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                  />
                  <ProFormDatePicker
                    width="md"
                    name="coursedateend"
                    label="Course Date End"
                    placeholder="Please select course ending date"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                  />
                  <ProFormSelect
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    width="md"
                    name="offers"
                    label="Offers"
                    placeholder="Please select course offers"
                    options={opt}
                  />
                  <ProForm.Item
                    name="timeing"
                    label="Class Timing"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                  >
                    <TimePicker.RangePicker format="HH:mm" />
                  </ProForm.Item>
                  <ProFormTextArea
                    width="md"
                    name="description"
                    label="Description:"
                    placeholder="Please enter your course description"
                     rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    fieldProps={{
                      maxLength: 150, // limit to 200 characters
                      showCount: true, // shows "x / 200" below the textarea
                    }}
                  />
                  <ProFormSelect
                    width="md"
                    name="teachernames"
                    label="Teacher name:"
                    placeholder="Please enter your name"
                     rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    options={[
                      { label: signup.fullName, value: signup.fullName },
                    ]}
                  />
                  <ProFormSelect
                    width="sm"
                    name="teacherage"
                    label="Teacher age:"
                    placeholder="Please select your age"
                     rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    options={co}
                  />
                  <ProFormSelect
                    width="md"
                    name="teachergender"
                    label="Teacher Gender:"
                    placeholder="Please select your gender"
                     rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    options={[{ label: signup.gender, value: signup.gender }]}
                  />
                   <ProFormSelect
                    width="md"
                    name="teacherexperience"
                    label="Teaching Experience:"
                    placeholder="Please select your teaching experience"
                     rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    options={[{ label: signup.teachingExperience, value: signup.teachingExperience }]}
                  />
                  <ProFormSelect 
                  width="md"
                  name="classcapacity"
                  label="Class Capacity:"
                   rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                  placeholder="Please select your class capacity"
                 options={c}
                  />
                </ProForm.Group>
              </ModalForm>
            }
          >
            <ProTable
              scroll={{ x: 1500 }}
              columns={columns}
              onLoad={5}
              headerTitle="Courses"
              headStyle={{ border: "0.3px solid lightgrey" }}
              search={false}
            />
          </ProCard>
        </>
      ),
    },
  ];
  const item = [
    {
      key: "1",
      label: "My Courses",

      children: (
        <>
          <ProCard
            bordered
            bodyStyle={{
              backgroundColor: "transparent",

              display: "flex",
              flexDirection: "column",
            }}
            type="default"
            title="My Courses"
            subTitle="List of courses you are teaching"
          >
            <img
              style={{
                width: "99%",
                height: "400px",
              }}
              src="./images/home.jpg.jpg"
              alt="mamo"
            />
            <Tabs
              items={tem}
              type="card"
              tabPlacement="left"
              defaultActiveKey="1"
              tabBarStyle={{
                color: "grey",
                background:
                  "linear-gradient(-45deg ,orange,red,lime,yellow,rgb(224, 115, 133),rgb(26, 165, 211),white)",
                borderRadius: "8px",
              }}
            />
          </ProCard>
        </>
      ),
    },
  ];
  return (
    <>
      <Tabs
        items={item}
        centered
        defaultActiveKey="1"
        tabBarStyle={{
          color: "grey",
          background:
            "linear-gradient(-45deg ,orange,red,lime,yellow,rgb(224, 115, 133),rgb(26, 165, 211),white)",
          borderRadius: "8px",
        }}
      />
    </>
  );
};

export default Teacherdashboard;
