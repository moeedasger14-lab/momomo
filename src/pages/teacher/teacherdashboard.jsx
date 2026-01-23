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
import { Tabs, Card, Alert, Button, Dropdown, TimePicker, Tooltip } from "antd";
import React, { Children, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Teacherdashboard = () => {
  const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [courses, setCourses] = useState([]);
  const colim = [
    {
      label:"Monday", value:"Monday"
    },
    {
      label:"Tuesday", value:"Tuesday"
    },
    {
      label:"Wednesday", value:"Wednesday"
    },
    {
      label:"Thursday", value:"Thursday"
    },
    {
      label:"Friday", value:"Friday"
    },
    {
      label:"Saturday", value:"Saturday"
    },
    {
      label:"Sunday", value:"Sunday"
    },
    {
      label:"Full Week", value:"Full Week"
    },
    {
      label:"Saturday and Sunday", value:"Saturday and Sunday"
    }
  ]
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
    { label: "1 month", value: "1 month" },
    { label: "3 weeks", value: "3 weeks" },
  ];
  const approvedTeacher = JSON.parse(localStorage.getItem("approvedTeachers")) || [];
  const columns = [
    {
      title: "Course Name",
      dataIndex: "coursename",
      key: "coursename",
    },
    {
      title: "Which type of Course",
      dataIndex: "coursetype",
      key: "coursetype",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Course Price",
      dataIndex: "courseprice",
      key: "courseprice",
    },
    {
      title: "Price Status",
      dataIndex: "pricestatus",
      key: "pricestatus",
    },
    {
      title: "Course Starting Date",
      dataIndex: "coursestartdate",
      key: "coursestartdate",
      render: (value) => value || "",

    },
    {
      title: "Course Ending Date",
      dataIndex: "courseend",
      key: "courseend",
      render: (value) => value || "",

    },
    {
      title: "Offers",
      dataIndex: "offers",
      key: "offers",
    },
    {
     title:"Class Days",
     dataIndex:"classdays",
     key:"classdays",
    },
    {
      title: "Timing",
      dataIndex: "timing",
      key: "timing",
    render: (value) => {
    if (!value) return "";
    if (Array.isArray(value)) {
      const [start, end] = value;
      const toTime = (val) =>
        val?.format
          ? val.format("HH:mm")
          : new Date(val).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      return `${toTime(start)} - ${toTime(end)}`;
    }
    return value;
  },


    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => {
    if (!text) return "";
    return text.length > 10 ? text.substring(0, 10) + "..." : text;
  },

    },
    {
      title: "Teacher Name",
      dataIndex: "teachernames",
      key: "teachernames",
    },
    {
      title: "Teacher Age",
      dataIndex: "teacherage",
      key: "teacherage",
    },
    {
      title: "Teacher Gender",
      dataIndex: "teachergender",
      key: "teachergender",
    },
    {
      title: "Teaching Experience",
      dataIndex: "teacherexperience",
      key: "teacherexperience",
    },
    {
      title: "Class Capacity",
      dataIndex: "classcapacity",
      key: "classcapacity",
    },
    {
      title:"Status",
      dataIndex:"status",
      render: (status) =>
        status === "approved" ? "Approved" : "Pending",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
         <Button color="lime" type="dashed" >Accept</Button>
         <Button style={{margin:"5px"}} color="danger" type="dashed">Reject</Button>
        </>
      ),
    },
  ];
  const c = [
    {
      label: "5 students",
      value: "5 students",
    },
    {
      label: "10 students",
      value: "10 students",
    },
    {
      label: "15 students",
      value: "15 students",
    },
    {
      label: "20 students",
      value: "20 students",
    },
    {
      label: "25 students",
      value: "25 students",
    },
    {
      label: "30 students",
      value: "30 students",
    },
    {
      label: "35 students",
      value: "35 students",
    },
  ];
   const fetchCourses = async () => {
  const res = await fetch("http://localhost:60977/api/courses/teacher", {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await res.json();
  setCourses(Array.isArray(data) ? data : []);
};


const [formRef] = ProForm.useForm();
const [teacher, setTeacher] = useState(null);

useEffect(() => {
  const fetchTeacher = async () => {
    const res = await fetch(
      `http://localhost:60977/api/admin/users/${currentUser._id}`
    );
    const data = await res.json();
    setTeacher(data);

    // ✅ THIS is what fills the form
    formRef.current?.setFieldsValue({
      teachernames: data.fullName,
      teachergender: data.gender,
      experience: data.teacherProfile?.experience,
    });
  };

  fetchTeacher();
}, []);
  useEffect(() => {
    fetchCourses();
  }, []);
  const openCreateCourseModal = async () => {
  const res = await fetch("http://localhost:60977/api/auth/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await res.json();
  setTeacher(data);

  // 🔑 THIS IS WHAT YOU WERE MISSING
  form.setFieldsValue({
    teacherName: data.fullName,
    gender: data.gender,
    experience: data.teacherProfile?.teachingExperience,
  });

  setModalOpen(true);
};
const handleCreate = async (values) => {
  await fetch("http://localhost:60977/api/courses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...values,
      teacher: currentUser._id, // 🔴 REQUIRED
    }),
  });

  setModalOpen(true);
};
 
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
               
                dateFormatter="string"
               formRef={formRef}
             submitter={false}
                width={800}
                autoFocusFirstInput
                scrollToFirstError
                title="Create Course"
                trigger={<Button icon={<PlusOutlined />}>Create course</Button>}
              >
                <ProForm.Group onFinish={handleCreate} >
                  <ProFormText
                    width="md"
                    name="coursename"
                    label="Course Name:"
                    placeholder="Enter course name"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                  />
                  <ProFormText
                    width="md"
                    name="coursetype"
                    label="Course Type:"
                    mode="single"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    placeholder="please select course type"
                  
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
                    name="classdays"
                    label="Class Days:"
                    placeholder="Please select class days"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    options={colim}
                  />

                  <ProFormSelect
                    width="md"
                    name="pricestatus"
                    label="Price Status:"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                    placeholder="Please select price status"
                    options={option}
                  />
                  <ProFormDatePicker
                    width="md"
                    name="coursestartdate"
                    label="Course date staring"
                    placeholder="Please select course starting"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
                  />
                  <ProFormDatePicker
                    width="md"
                    name="courseend"
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
                    name="timing"
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
                   options={
        teacher
          ? [{ label: teacher.fullName, value: teacher.fullName }]
          : []
      }
    
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
                  options={
        teacher
          ? [{ label: teacher.gender, value: teacher.gender }]
          : []
      }
                  />
                  <ProFormSelect
                    width="md"
                   name="experience"
      label="Teaching Experience"
     
                    placeholder="Please select your teaching experience"
                    rules={[
                      { required: true, message: "Please select time range!" },
                    ]}
             options={
        teacher
          ? [{ label: teacher.teacherProfile?.experience,
             value: teacher.teacherProfile?.experience }]
          : []
      }
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
                 <Button htmlType="submit" width="md" type="primary">Submit</Button>
                </ProForm.Group>
              </ModalForm>
            }
          >
            <ProTable
            rowKey="id"
           
            dateFormatter="string"
              scroll={{ x: 1400 }}
              columns={columns}
              onLoad={5}
              dataSource={courses}
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
