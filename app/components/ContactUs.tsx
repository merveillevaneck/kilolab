import React, { ChangeEvent, useCallback, useMemo } from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { Title } from '@kilo-lab/web-design.title';
import { Text } from '@kilo-lab/web-design.text';
import { Button } from '@kilo-lab/web-design.button';
import styled, { useTheme } from 'styled-components';
import { useIsMobile, useWidth } from '~/hooks';
import { motion } from 'framer-motion';
import { Formik, FormikHelpers } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const contactUsSchema = z.object({
  name: z.string(),
  email: z.string().email().trim(),
  contactNumber: z.string(),
  message: z.string(),
});

type Values = z.infer<typeof contactUsSchema>

const Input = styled.input`
  &:focus {
    outline: none;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
  }
  height: 40px;
  border-radius: 15px;
  border-color: unset;
  border-width: unset;
  border-style: unset;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  padding-left: 20px;
  background-color: white; 
  color: ${ p => p.theme.colors.text };
  font-weight: bold;
  font-family: ubuntu;
  margin-top: 10px;
`;


const TextArea = styled.textarea`
  &:focus {
    outline: none;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
  }
  width: 240px;
  max-width: 240px;
  height: 100px;
  border-radius: 15px;
  border-color: unset;
  border-width: unset;
  border-style: unset;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  padding-left: 20px;
  background-color: white;
  color: ${ p => p.theme.colors.text };
  font-weight: bold;
  font-family: ubuntu;
  margin-top: 10px;
  padding-top: 10px;
`;


export interface ContactUsProps extends Partial<ViewProps> { }

export const ContactUs: React.FC<ContactUsProps> = props => {
  const theme = useTheme();
  const mobile = useIsMobile();
  const width = useWidth();

  const onSubmit = useCallback(async (values: Values, actions: FormikHelpers<Values>) => {
    actions.setSubmitting(true);
    try {
      //do something
    } catch (e) {
      console.log(e);
    } finally {
      actions.setSubmitting(false);
    }
  }, []);

  const initialValues = useMemo(() => ({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  }), []);

  const handleChange = useCallback((name: string, setFieldValue: any, ) => (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, e.target.value);
  }, [])

  return (
    <View
      position="relative"
      height="650px"
      overflowY="visible"
      overflowX="hidden"
      paddingTop="300px"
      paddingBottom="200px"
      display="flex"
      flexDirection={mobile ? "column-reverse" : "row"}
      justifyContent="space-evenly"
      alignItems="center"
      zIndex={2}
      {...props}
    >
      <img src="/green_wave_2.svg" width={mobile ? "1000px" : width}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      />
      <View 
        flex={1}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <View
          as={motion.div}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear"
          }}
          backgroundColor={theme.colors.primary}
          width="500px"
          height="500px"
          borderRadius="49%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow={theme.titleShadow}
        >
          <Formik
            onSubmit={onSubmit}
            validationSchema={toFormikValidationSchema(contactUsSchema)}
            initialValues={initialValues}
            validateOnBlur
            enableReinitialize
          >
            {({values, handleSubmit, setFieldValue}) => (
              <View
                as={motion.div}
                animate={{
                  rotate: [0, -180, -360],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                width="300px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Input placeholder="Name" value={values.name} onChange={handleChange('name', setFieldValue)} />
                <Input placeholder="Email" value={values.email} onChange={handleChange('email', setFieldValue)} />
                <Input placeholder="Contact Number" value={values.contactNumber} onChange={handleChange('contactNumber', setFieldValue)} />
                <TextArea
                  placeholder="Message"
                  value={values.message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFieldValue('message', e.target.value)}
                />
                 <Button onClick={() => handleSubmit()} />
              </View>
            )}

          </Formik>
        </View>
      </View>
      <View
        flex={1}
        paddingX={mobile ? "20px" : undefined}
        marginLeft={mobile ? undefined : "20px"}
      >
        <Title
          fontFamily="Ubuntu"
          color={theme.colors.primary}
          textShadow={theme.textShadow}
          fontSize={mobile ? "34px" : "45px"}
          fontWeight="normal"
          width={mobile ? "100%" : undefined}
          textAlign={mobile ? "center" : "left"}
          marginTop="0px"
        >
          Have an idea? Let us know...
        </Title>
        <View
          display="flex"
          flexDirection={mobile ? "column" : "row"}
          alignItems="center"
          width="100%"
          marginBottom={mobile ? "100px" : undefined}
        >
          <View
            as={motion.div}
            whileHover={{scale: 1.05}}
            style={{cursor: "pointer"}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderColor={theme.colors.primary}
            borderWidth="3px"
            borderRadius="15px"
            boxShadow="1px 2px 5px rgba(0, 0, 0, 0.5)"
            paddingX="10px"
            margin="10px"
          >
            <Text fontFamily="Ubuntu" color={theme.colors.primary} fontWeight="bold">Consultation</Text>
          </View>
          <View
            as={motion.div}
            whileHover={{scale: 1.05}}
            style={{cursor: "pointer"}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={theme.colors.primary}
            borderWidth="3px"
            borderRadius="15px"
            boxShadow="1px 2px 5px rgba(0, 0, 0, 0.5)"
            paddingX="10px"
            margin="10px"
          >
            <Text fontFamily="Ubuntu" color="white" fontWeight="bold">Web Development</Text>
          </View>
          <View
            as={motion.div}
            whileHover={{scale: 1.05}}
            style={{cursor: "pointer"}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderColor={theme.colors.primary}
            borderWidth="3px"
            borderRadius="15px"
            boxShadow="1px 2px 5px rgba(0, 0, 0, 0.5)"
            paddingX="10px"
            margin="10px"
          >
            <Text fontFamily="Ubuntu" color={theme.colors.primary} fontWeight="bold">Mobile Development</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
