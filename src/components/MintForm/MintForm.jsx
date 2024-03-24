import React, { useState } from 'react';
import { Formik } from 'formik';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { ReactComponent as DiscordIcon } from 'icons/discord.svg';
import { ReactComponent as MetaMaskIcon } from 'icons/metaMask.svg';

import Button from 'components/Button';

import { validationSchema } from 'helpers/schema';

import * as s from './MintForm.styled';

const MintForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitted(true);
    const user = values.userName.trim().replace('@', '');
    const wallet = values.walletAddress.trim();

    Report.success(
      `Dear ${user}`,
      `Welcome to the community! NFT is on the way to your wallet ${wallet} `,
      'Okay',
      () => {
        resetForm();
        setIsSubmitted(false);
      }
    );
  };

  return (
    <Formik
      initialValues={{
        userName: '',
        walletAddress: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isValid }) => (
        <s.Forma autoComplete="off">
          <s.Container>
            <s.IconContainer>
              <s.Box>
                <DiscordIcon />
              </s.Box>
            </s.IconContainer>

            <s.Input
              name="userName"
              placeholder="@username"
              error={errors.userName && touched.userName ? 'true' : undefined}
            />
            {errors.userName && touched.userName ? (
              <s.Error name="userName" component="div" />
            ) : null}
          </s.Container>

          <s.Container>
            <s.IconContainer>
              <s.Box>
                <MetaMaskIcon />
              </s.Box>
            </s.IconContainer>

            <s.Input
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
          </s.Container>

          <Button
            type="submit"
            disabled={!isValid}
            name={!isSubmitted ? (!isValid ? 'ERROR' : 'MINT') : 'MINTED'}
          />
        </s.Forma>
      )}
    </Formik>
  );
};

export default MintForm;
