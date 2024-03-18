import React from 'react';
import { Formik } from 'formik';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { ReactComponent as DiscordIcon } from '../../icons/discord.svg';
import { ReactComponent as MetaMaskIcon } from '../../icons/metaMask.svg';

import ButtonNormal from 'components/ButtonNormal';

import { validationSchema } from './schema.js';

import * as s from './MintForm.styled';

const MintForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    Report.success(
      `Dear ${values.username}`,
      `Welcome to the community of like-minded individuals!
NFTs will soon be credited to your account ${values.walletAddress} `,
      'Okay',
      () => {
        resetForm();
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
            <s.Error name="username" component="div" />
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
            <s.Error name="walletAddress" component="div" />
          </s.FieldContainer>

          <ButtonNormal type="submit" name="Mint" />
        </s.Forma>
      )}
    </Formik>
  );
};

export default MintForm;
