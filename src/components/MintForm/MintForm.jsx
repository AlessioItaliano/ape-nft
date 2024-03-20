import React, { useState } from 'react';
import { Formik } from 'formik';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { ReactComponent as DiscordIcon } from '../../icons/discord.svg';
import { ReactComponent as MetaMaskIcon } from '../../icons/metaMask.svg';

import ButtonNormal from 'components/ButtonNormal';

import { validationSchema } from './schema.js';

import * as s from './MintForm.styled';

const MintForm = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setIsSubmited(true);
    const user = values.username.trim().replace('@', '');
    const wallet = values.walletAddress.trim();

    Report.success(
      `Dear ${user}`,
      `Welcome to the community of like-minded individuals!
NFTs will soon be credited to your account ${wallet} `,
      'Okay',
      () => {
        resetForm();
        setIsSubmited(false);
      }
    );
  };

  return (
    <Formik
      initialValues={{
        username: '',
        walletAddress: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <s.Forma autoComplete="off">
          <s.FieldContainer>
            <s.IconContainer>
              <s.Box>
                <DiscordIcon />
              </s.Box>
            </s.IconContainer>

            <s.FieldInput
              name="username"
              placeholder="@username"
              error={errors.username && touched.username ? 'true' : undefined}
            />
            {errors.username && touched.username ? (
              <s.Error name="username" component="div" />
            ) : null}
          </s.FieldContainer>

          <s.FieldContainer>
            <s.IconContainer>
              <s.Box>
                <MetaMaskIcon />
              </s.Box>
            </s.IconContainer>

            <s.FieldInput
              name="walletAddress"
              placeholder="Wallet address"
              error={
                errors.walletAddress && touched.walletAddress
                  ? 'true'
                  : undefined
              }
            />
            {errors.walletAddress && touched.walletAddress ? (
              <s.Error name="walletAddress" component="div" />
            ) : null}
          </s.FieldContainer>

          <ButtonNormal
            type="submit"
            name={
              !isSubmited
                ? Object.keys(errors).length > 0
                  ? 'Error'
                  : 'Mint'
                : 'MINTED'
            }
          />
        </s.Forma>
      )}
    </Formik>
  );
};

export default MintForm;
