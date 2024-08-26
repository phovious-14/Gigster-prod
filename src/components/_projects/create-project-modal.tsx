
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  Input,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

const CreateProjectModal = ({ item, isOpen, onClose }: any) => {

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    githubUrl: '',
    walletAddress: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevItem: any) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {

  };

  return (
    <Modal size={'lg'} isCentered initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>List your Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Project Name</FormLabel>
            <Input name="name" placeholder="Project Name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Git Url</FormLabel>
            <Input name="html_url" placeholder="Git Url" value={formData.githubUrl} disabled />
          </FormControl>
          <FormControl>
            <FormLabel>Wallet Address</FormLabel>
            <Input name="walletAddress" placeholder="To wallet address" value={formData.walletAddress} disabled />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            spinnerPlacement="start"
            onClick={handleSubmit}
            isLoading={loading}
            // loadingText={txnStatus === 'started' ? 'txn submitting...' : txnStatus === 'initiated' ? 'completing txn ...' : 'Successfully Completed'}
          >
            Confirm
          </Button>
          <Button
            isLoading={loading}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateProjectModal;
