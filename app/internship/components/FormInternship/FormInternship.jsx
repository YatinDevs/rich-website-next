import { useState } from "react";
import { Form, Input, Select, Button, Steps, message, DatePicker } from "antd";

const { Step } = Steps;
import {
  collegeOptions,
  branchOptions,
  yearOptions,
  technologyOptions,
  modeOptions,
  locationOptions,
  genderOptions,
} from "../../options";

const FormInternship = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (field, e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleNext = async () => {
    try {
      await form.validateFields();
      setCurrentStep(currentStep + 1);
    } catch (error) {
      message.error("Please fill in all required fields correctly.");
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      const googleScriptURL =
        "https://script.google.com/macros/s/AKfycbxij8OoNnH1wZbj3V_W5aDWcjNnePQw7OOpNwhfOZJrUttNrU_WsZNR3AgB39eR0PgTKA/exec";

      const submissionData = {
        ...formData,
        college:
          formData.college === "Other"
            ? formData.other_college
            : formData.college,
        location:
          formData.location === "Other"
            ? formData.other_location
            : formData.location,
      };

      console.log("Submitting Data:", submissionData);
      await fetch(googleScriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      message.success("Form submitted successfully!");
      form.resetFields();
      setFormData({});
      setCurrentStep(0);
    } catch (error) {
      message.error("Please check the form for errors before submitting.");
    }
  };

  const steps = [
    {
      title: "Personal Details",
      content: (
        <div className="my-5">
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input onChange={(e) => handleChange("name", e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input onChange={(e) => handleChange("email", e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Contact Number"
            name="phone"
            rules={[
              {
                required: true,
                pattern: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit number",
              },
            ]}
          >
            <Input onChange={(e) => handleChange("phone", e.target.value)} />
          </Form.Item>

          <Form.Item
            label="WhatsApp Number"
            name="whatsapp"
            rules={[
              {
                required: true,
                pattern: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit number",
              },
            ]}
          >
            <Input onChange={(e) => handleChange("whatsapp", e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[{ required: true }]}
          >
            <DatePicker
              onChange={(date, dateString) => handleChange("dob", dateString)}
            />
          </Form.Item>

          <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
            <Select
              options={genderOptions.map((value) => ({ value, label: value }))}
              onChange={(value) => handleChange("gender", value)}
            />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true }]}
          >
            <Select
              options={[...locationOptions, "Other"].map((value) => ({
                value,
                label: value,
              }))}
              onChange={(value) => handleChange("location", value)}
            />
          </Form.Item>

          {formData.location === "Other" && (
            <Form.Item
              label="Enter Other Location"
              name="other_location"
              rules={[{ required: true, message: "Please enter location" }]}
            >
              <Input
                onChange={(e) => handleChange("other_location", e.target.value)}
              />
            </Form.Item>
          )}
        </div>
      ),
    },
    {
      title: "Academic Details",
      content: (
        <div className="my-5">
          <Form.Item
            label="College"
            name="college"
            rules={[{ required: true }]}
          >
            <Select
              options={[...collegeOptions, "Other"].map((value) => ({
                value,
                label: value,
              }))}
              onChange={(value) => handleChange("college", value)}
            />
          </Form.Item>

          {formData.college === "Other" && (
            <Form.Item
              label="Enter Other College"
              name="other_college"
              rules={[{ required: true, message: "Please enter college name" }]}
            >
              <Input
                onChange={(e) => handleChange("other_college", e.target.value)}
              />
            </Form.Item>
          )}

          <Form.Item label="Branch" name="branch" rules={[{ required: true }]}>
            <Select
              options={branchOptions.map((value) => ({
                value,
                label: value,
              }))}
              onChange={(value) => handleChange("branch", value)}
            />
          </Form.Item>

          <Form.Item label="Year" name="year" rules={[{ required: true }]}>
            <Select
              options={yearOptions.map((value) => ({
                value,
                label: value,
              }))}
              onChange={(value) => handleChange("year", value)}
            />
          </Form.Item>

          <Form.Item
            label="Technology"
            name="technology"
            rules={[{ required: true }]}
          >
            <Select
              options={technologyOptions.map((value) => ({
                value,
                label: value,
              }))}
              onChange={(value) => handleChange("technology", value)}
            />
          </Form.Item>

          <Form.Item label="Mode" name="mode" rules={[{ required: true }]}>
            <Select
              options={modeOptions.map((value) => ({
                value,
                label: value,
              }))}
              onChange={(value) => handleChange("mode", value)}
            />
          </Form.Item>
        </div>
      ),
    },
  ];

  return (
    <div id="internship-form" className="max-w-3xl mx-auto">
      <Steps current={currentStep} className="p-5 border rounded-3xl md:p-10">
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        className="m-5 border rounded-3xl p-5 md:p-10"
      >
        {steps[currentStep].content}
        <div className="flex justify-between mt-4">
          {currentStep > 0 && <Button onClick={handlePrev}>Previous</Button>}
          {currentStep < steps.length - 1 ? (
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default FormInternship;
