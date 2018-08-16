import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { FormComponentProps } from 'antd/lib/form';
import { Button, Checkbox, Form, Input, Radio, Select } from 'antd';
import countries from './countries';
import { device, size } from '@src/breakpoints';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { TextArea } = Input;

export const StyledSelect = styled(Select)`
  .ant-select-selection {
    background: #f6f6f6 !important;
    border: 0;
  }
  .ant-select-selection__clear {
    background-color: #f6f6f6 !important;
  }
`;

const SectionWrapper = styled.section`
  padding: 70px 0;
  background: #f0f0f0;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 0px;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  line-height: 2 !important;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

interface State {
  citizen: string;
}

class TokenInterestForm extends React.Component<FormComponentProps, State> {
  postfixSelector = (
    <StyledSelect
      defaultValue="USD"
      dropdownMenuStyle={{ backgroundColor: '#f6f6f6' }}
      filterOption={true}
      style={{
        backgroundColor: 'transparent',
        width: 80
      }}
    >
      <Option value="USD">USD</Option>
      <Option value="ETH">ETH</Option>
      <Option value="BTC">BTC</Option>
    </StyledSelect>
  );

  constructor(props: FormComponentProps) {
    super(props);

    this.state = {
      citizen: ''
    };
  }

  handleCitizenSelect = (citizen: string) => {
    this.setState({ citizen });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <SectionWrapper>
        <Row type="flex" justify="center">
          <Col
            xs={24}
            sm={24}
            md={16}
            xl={12}
            style={{ background: '#fff', padding: '50px' }}
          >
            <h1 style={{ fontSize: '2rem' }}>Interested in Contributing?</h1>
            <Form
              action={`https://marketprotocol.us17.list-manage.com/subscribe/post`}
              onSubmit={e => {
                form.validateFields((errors, _) => {
                  if (errors) {
                    e.preventDefault();
                  }
                });
              }}
              acceptCharset="utf-8"
              method="post"
              autoComplete={'off'}
            >
              <input type="hidden" name="u" value="ef1f265a21b4aae9002084ee3" />
              <input type="hidden" name="id" value="9b6a6fd0ec" />
              <input type="hidden" name="CITIZEN" value={this.state.citizen} />

              <FormItem label="Full Name">
                {getFieldDecorator('FNAME', {
                  rules: [
                    {
                      message: 'Please input your full name!',
                      required: true,
                      whitespace: true
                    }
                  ]
                })(
                  <Input
                    name="FNAME"
                    type="text"
                    placeholder="Full name"
                    style={{
                      backgroundColor: '#f6f6f6',
                      marginTop: '10px'
                    }}
                  />
                )}
              </FormItem>
              <FormItem label="Email Address">
                {getFieldDecorator('EMAIL', {
                  rules: [
                    {
                      message: 'Please input an Email Address!',
                      required: true
                    },
                    {
                      message: 'Please input a correct Email Address',
                      type: 'email'
                    }
                  ]
                })(
                  <Input
                    name="EMAIL"
                    placeholder="Your email address"
                    style={{
                      backgroundColor: '#f6f6f6'
                    }}
                  />
                )}
              </FormItem>
              <FormItem label="Are you an accredited investor?">
                {getFieldDecorator('ACCRED', {
                  initialValue: 'Yes'
                })(
                  <RadioGroup name="ACCRED">
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem label="What type of entity do you represent?">
                {getFieldDecorator('ENTITY', { initialValue: 'individual' })(
                  <RadioGroup name="ENTITY">
                    <Radio value="Individual">Individual</Radio>
                    <Radio value="Syndicate">Syndicate</Radio>
                    <Radio value="Professional Fund">Professional Fund</Radio>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem label="Desired Purchase Amount">
                {getFieldDecorator('DESIREDALL', {
                  rules: [
                    {
                      message: 'Desired purchase amount is required',
                      required: true
                    }
                  ]
                })(
                  <Input
                    name="DESIREDALL"
                    placeholder="25000"
                    addonAfter={this.postfixSelector}
                    style={{
                      backgroundColor: '#f6f6f6',
                      width: 250
                    }}
                    type="number"
                  />
                )}
              </FormItem>
              <FormItem label="Citizenship">
                {getFieldDecorator('CITIZEN', {
                  rules: [
                    {
                      message: 'Citizenship is required',
                      required: true
                    }
                  ]
                })(
                  <StyledSelect
                    placeholder="SELECT COUNTRY"
                    style={{
                      width: 250
                    }}
                    dropdownStyle={{ backgroundColor: '#f6f6f6' }}
                    dropdownMenuStyle={{ backgroundColor: '#f6f6f6' }}
                    onChange={this.handleCitizenSelect}
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {countries.map(c => (
                      <Option key={c.code} value={c.name}>
                        {c.name}
                      </Option>
                    ))}
                  </StyledSelect>
                )}
              </FormItem>
              <FormItem label="ETH or BTC address you plan to send from (optional)">
                {getFieldDecorator('ETHADDRESS')(
                  <Input
                    name="ETHADDRESS"
                    placeholder="0x..."
                    type="text"
                    style={{
                      backgroundColor: '#f6f6f6',
                      marginTop: '10px'
                    }}
                  />
                )}
              </FormItem>
              <FormItem label="Anything else we should know? (optional)">
                {getFieldDecorator('ANYTHING')(
                  <TextArea
                    name="ANYTHING"
                    rows={4}
                    style={{
                      backgroundColor: '#f6f6f6',
                      marginTop: '10px'
                    }}
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('CONFIRM', {
                  rules: [
                    {
                      message: 'Please check this option to continue',
                      required: true
                    }
                  ]
                })(
                  <StyledCheckbox>
                    You agree that completion of this form is for informational
                    purposes only, and does not constitute an offer for the sale
                    of Market tokens, nor for the sale of any equity or other
                    ownership or other interest in Market Limited.
                  </StyledCheckbox>
                )}
              </FormItem>
              <ButtonWrapper>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    marginTop: '1rem',
                    width: '10rem'
                  }}
                >
                  Submit
                </Button>
              </ButtonWrapper>
            </Form>
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}

const WrappedForm = Form.create<FormComponentProps>()(TokenInterestForm);

export default WrappedForm;
