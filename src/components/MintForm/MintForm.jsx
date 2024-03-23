import React, { useState } from 'react';
import { Formik } from 'formik';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { ReactComponent as DiscordIcon } from 'icons/discord.svg';
import { ReactComponent as MetaMaskIcon } from 'icons/metaMask.svg';

import Button from 'components/Button';

import { validationSchema } from 'helpers/schema';

import * as s from './MintForm.styled';

const MintForm = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmited(true);
    const user = values.username.trim().replace('@', '');
    const wallet = values.walletAddress.trim();

    Report.success(
      `Dear ${user}`,
      `Welcome to the community!
NFT is on the way to your wallet ${wallet} `,
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
          <s.Container>
            <s.IconContainer>
              <s.Box>
                <DiscordIcon />
              </s.Box>
            </s.IconContainer>

            <s.Input
              name="username"
              placeholder="@username"
              error={errors.username && touched.username ? 'true' : undefined}
            />
            {errors.username && touched.username ? (
              <s.Error name="username" component="div" />
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
            name={
              isSubmited
                ? Object.keys(errors).length > 0
                  ? 'ERROR'
                  : 'MINTED'
                : 'MINT'
            }
          />
        </s.Forma>
      )}
    </Formik>
  );
};

export default MintForm;
